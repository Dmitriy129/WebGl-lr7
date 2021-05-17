import {
	BufferAttribute,
	BufferGeometry,
	Matrix4,
	Vector3,
	Vector4
} from '../libs/three.module.js';
import teapotPatches from "./teapotPatches.js"
import teapotVertices from "./teapotVertices.js"
/**
 * Tessellates the famous Utah teapot database by Martin Newell into triangles.
 *
 * Parameters: size = 50, segments = 10, bottom = true, lid = true, body = true,
 *   fitLid = false, blinn = true
 *
 * size is a relative scale: I've scaled the teapot to fit vertically between -1 and 1.
 * Think of it as a "radius".
 * segments - number of line segments to subdivide each patch edge;
 *   1 is possible but gives degenerates, so two is the real minimum.
 * bottom - boolean, if true (default) then the bottom patches are added. Some consider
 *   adding the bottom heresy, so set this to "false" to adhere to the One True Way.
 * lid - to remove the lid and look inside, set to true.
 * body - to remove the body and leave the lid, set this and "bottom" to false.
 * fitLid - the lid is a tad small in the original. This stretches it a bit so you can't
 *   see the teapot's insides through the gap.
 * blinn - Jim Blinn scaled the original data vertically by dividing by about 1.3 to look
 *   nicer. If you want to see the original teapot, similar to the real-world model, set
 *   this to false. True by default.
 *   See http://en.wikipedia.org/wiki/File:Original_Utah_Teapot.jpg for the original
 *   real-world teapot (from http://en.wikipedia.org/wiki/Utah_teapot).
 *
 * Note that the bottom (the last four patches) is not flat - blame Frank Crow, not me.
 *
 * The teapot should normally be rendered as a double sided object, since for some
 * patches both sides can be seen, e.g., the gap around the lid and inside the spout.
 *
 * Segments 'n' determines the number of triangles output.
 *   Total triangles = 32*2*n*n - 8*n    [degenerates at the top and bottom cusps are deleted]
 *
 *   size_factor   # triangles
 *       1          56
 *       2         240
 *       3         552
 *       4         992
 *
 *      10        6320
 *      20       25440
 *      30       57360
 *
 * Code converted from my ancient SPD software, http://tog.acm.org/resources/SPD/
 * Created for the Udacity course "Interactive Rendering", http://bit.ly/ericity
 * Lesson: https://www.udacity.com/course/viewer#!/c-cs291/l-68866048/m-106482448
 * YouTube video on teapot history: https://www.youtube.com/watch?v=DxMfblPzFNc
 *
 * See https://en.wikipedia.org/wiki/Utah_teapot for the history of the teapot
 *
 */

class TeapotGeometry extends BufferGeometry {

	constructor( size = 50, segments = 2, bottom = false, lid = true, body = false, fitLid = false, blinn = false ) {
	// constructor( size = 50, segments = 10, bottom = true, lid = true, body = true, fitLid = true, blinn = true ) {

		// 32 * 4 * 4 Bezier spline patches
		
		console.log(`teapotPatches.length`, teapotPatches.length)
		console.log(`teapotVertices.length`, teapotVertices.length)

		super();

		// number of segments per patch
		segments = Math.max( 2, Math.floor( segments ) );

		// Jim Blinn scaled the teapot down in size by about 1.3 for
		// some rendering tests. He liked the new proportions that he kept
		// the data in this form. The model was distributed with these new
		// proportions and became the norm. Trivia: comparing images of the
		// real teapot and the computer model, the ratio for the bowl of the
		// real teapot is more like 1.25, but since 1.3 is the traditional
		// value given, we use it here.
		const blinnScale = 1.3;

		// scale the size to be the real scaling factor
		const maxHeight = 3.15 * ( blinn ? 1 : blinnScale );

		const maxHeight2 = maxHeight / 2;
		const trueSize = size / maxHeight2;

		// Number of elements depends on what is needed. Subtract degenerate
		// triangles at tip of bottom and lid out in advance.
		let numTriangles = bottom ? ( 8 * segments - 4 ) * segments : 0;
		numTriangles += lid ? ( 16 * segments - 4 ) * segments : 0;
		numTriangles += body ? 40 * segments * segments : 0;

		const indices = new Uint32Array( numTriangles * 3 );

		let numVertices = bottom ? 4 : 0;
		numVertices += lid ? 8 : 0;
		numVertices += body ? 20 : 0;
		numVertices *= ( segments + 1 ) * ( segments + 1 );

		const vertices = new Float32Array( numVertices * 3 );
		const normals = new Float32Array( numVertices * 3 );
		const uvs = new Float32Array( numVertices * 2 );

		// Bezier form
		const ms = new Matrix4();
		ms.set(
			- 1.0, 3.0, - 3.0, 1.0,
			3.0, - 6.0, 3.0, 0.0,
			- 3.0, 3.0, 0.0, 0.0,
			1.0, 0.0, 0.0, 0.0 );

		const g = [];

		const sp = [];
		const tp = [];
		const dsp = [];
		const dtp = [];

		// M * G * M matrix, sort of see
		// http://www.cs.helsinki.fi/group/goa/mallinnus/curves/surfaces.html
		const mgm = [];

		const vert = [];
		const sdir = [];
		const tdir = [];

		const norm = new Vector3();

		let tcoord;

		let sval;
		let tval;
		let p;
		let dsval = 0;
		let dtval = 0;

		const normOut = new Vector3();

		const gmx = new Matrix4();
		const tmtx = new Matrix4();

		const vsp = new Vector4();
		const vtp = new Vector4();
		const vdsp = new Vector4();
		const vdtp = new Vector4();

		const vsdir = new Vector3();
		const vtdir = new Vector3();

		const mst = ms.clone();
		mst.transpose();

		// internal function: test if triangle has any matching vertices;
		// if so, don't save triangle, since it won't display anything.
		const notDegenerate = ( vtx1, vtx2, vtx3 ) => // if any vertex matches, return false
			! ( ( ( vertices[ vtx1 * 3 ] === vertices[ vtx2 * 3 ] ) &&
					( vertices[ vtx1 * 3 + 1 ] === vertices[ vtx2 * 3 + 1 ] ) &&
					( vertices[ vtx1 * 3 + 2 ] === vertices[ vtx2 * 3 + 2 ] ) ) ||
					( ( vertices[ vtx1 * 3 ] === vertices[ vtx3 * 3 ] ) &&
					( vertices[ vtx1 * 3 + 1 ] === vertices[ vtx3 * 3 + 1 ] ) &&
					( vertices[ vtx1 * 3 + 2 ] === vertices[ vtx3 * 3 + 2 ] ) ) || ( vertices[ vtx2 * 3 ] === vertices[ vtx3 * 3 ] ) &&
					( vertices[ vtx2 * 3 + 1 ] === vertices[ vtx3 * 3 + 1 ] ) &&
					( vertices[ vtx2 * 3 + 2 ] === vertices[ vtx3 * 3 + 2 ] ) );


		for ( let i = 0; i < 3; i ++ ) {

			mgm[ i ] = new Matrix4();

		}

		const minPatches = body ? 0 : 20;
		const maxPatches = bottom ? 32 : 28;

		const vertPerRow = segments + 1;

		let surfCount = 0;

		let vertCount = 0;
		let normCount = 0;
		let uvCount = 0;

		let indexCount = 0;

		for ( let surf = minPatches; surf < maxPatches; surf ++ ) {

			// lid is in the middle of the data, patches 20-27,
			// so ignore it for this part of the loop if the lid is not desired
			if ( lid || ( surf < 20 || surf >= 28 ) ) {

				// get M * G * M matrix for x,y,z
				for ( let i = 0; i < 3; i ++ ) {

					// get control patches
					const RR=4
					for ( let r = 0; r < RR; r ++ ) {

						for ( let c = 0; c < 4; c ++ ) {

							// transposed
							g[ c * 4 + r ] = teapotVertices[ teapotPatches[ surf * 16 + r * 4 + c ] *3 + i ];
							// g[ c * 4 + r ] = teapotVertices[ teapotPatches[ surf * 16 + r * 4 + c ] * 3 + i ];

							// is the lid to be made larger, and is this a point on the lid
							// that is X or Y?
							if ( fitLid && ( surf >= 20 && surf < 28 ) && ( i !== 2 ) ) {

								// increase XY size by 7.7%, found empirically. I don't
								// increase Z so that the teapot will continue to fit in the
								// space -1 to 1 for Y (Y is up for the final model).
								g[ c * 4 + r ] *= 1.077;

							}

							// Blinn "fixed" the teapot by dividing Z by blinnScale, and that's the
							// data we now use. The original teapot is taller. Fix it:
							if ( ! blinn && ( i === 2 ) ) {

								g[ c * 4 + r ] *= blinnScale;

							}

						}

					}

					gmx.set( g[ 0 ], g[ 1 ], g[ 2 ], g[ 3 ], g[ 4 ], g[ 5 ], g[ 6 ], g[ 7 ], g[ 8 ], g[ 9 ], g[ 10 ], g[ 11 ], g[ 12 ], g[ 13 ], g[ 14 ], g[ 15 ] );

					tmtx.multiplyMatrices( gmx, ms );
					mgm[ i ].multiplyMatrices( mst, tmtx );

				}

				// step along, get points, and output
				for ( let sstep = 0; sstep <= segments; sstep ++ ) {

					const s = sstep / segments;

					for ( let tstep = 0; tstep <= segments; tstep ++ ) {

						const t = tstep / segments;

						// point from basis
						// get power vectors and their derivatives
						for ( p = 4, sval = tval = 1.0; p --; ) {

							sp[ p ] = sval;
							tp[ p ] = tval;
							sval *= s;
							tval *= t;

							if ( p === 3 ) {

								dsp[ p ] = dtp[ p ] = 0.0;
								dsval = dtval = 1.0;

							} else {

								dsp[ p ] = dsval * ( 3 - p );
								dtp[ p ] = dtval * ( 3 - p );
								dsval *= s;
								dtval *= t;

							}

						}

						vsp.fromArray( sp );
						vtp.fromArray( tp );
						vdsp.fromArray( dsp );
						vdtp.fromArray( dtp );

						// do for x,y,z
						for ( let i = 0; i < 3; i ++ ) {

							// multiply power vectors times matrix to get value
							tcoord = vsp.clone();
							tcoord.applyMatrix4( mgm[ i ] );
							vert[ i ] = tcoord.dot( vtp );

							// get s and t tangent vectors
							tcoord = vdsp.clone();
							tcoord.applyMatrix4( mgm[ i ] );
							sdir[ i ] = tcoord.dot( vtp );

							tcoord = vsp.clone();
							tcoord.applyMatrix4( mgm[ i ] );
							tdir[ i ] = tcoord.dot( vdtp );

						}

						// find normal
						vsdir.fromArray( sdir );
						vtdir.fromArray( tdir );
						norm.crossVectors( vtdir, vsdir );
						norm.normalize();

						// if X and Z length is 0, at the cusp, so point the normal up or down, depending on patch number
						if ( vert[ 0 ] === 0 && vert[ 1 ] === 0 ) {

							// if above the middle of the teapot, normal points up, else down
							normOut.set( 0, vert[ 2 ] > maxHeight2 ? 1 : - 1, 0 );

						} else {

							// standard output: rotate on X axis
							normOut.set( norm.x, norm.z, - norm.y );

						}

						// store it all
						vertices[ vertCount ++ ] = trueSize * vert[ 0 ];
						vertices[ vertCount ++ ] = trueSize * ( vert[ 2 ] - maxHeight2 );
						vertices[ vertCount ++ ] = - trueSize * vert[ 1 ];

						normals[ normCount ++ ] = normOut.x;
						normals[ normCount ++ ] = normOut.y;
						normals[ normCount ++ ] = normOut.z;

						uvs[ uvCount ++ ] = 1 - t;
						uvs[ uvCount ++ ] = 1 - s;

					}

				}

				// save the faces
				for ( let sstep = 0; sstep < segments; sstep ++ ) {

					for ( let tstep = 0; tstep < segments; tstep ++ ) {

						const v1 = surfCount * vertPerRow * vertPerRow + sstep * vertPerRow + tstep;
						const v2 = v1 + 1;
						const v3 = v2 + vertPerRow;
						const v4 = v1 + vertPerRow;

						// Normals and UVs cannot be shared. Without clone(), you can see the consequences
						// of sharing if you call geometry.applyMatrix4( matrix ).
						if ( notDegenerate( v1, v2, v3 ) ) {

							indices[ indexCount ++ ] = v1;
							indices[ indexCount ++ ] = v2;
							indices[ indexCount ++ ] = v3;

						}

						if ( notDegenerate( v1, v3, v4 ) ) {

							indices[ indexCount ++ ] = v1;
							indices[ indexCount ++ ] = v3;
							indices[ indexCount ++ ] = v4;

						}

					}

				}

				// increment only if a surface was used
				surfCount ++;

			}

		}

		this.setIndex( new BufferAttribute( indices, 1 ) );
		this.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

		this.computeBoundingSphere();

	}

}

export { TeapotGeometry };
