			var camera, scene, renderer;

			var texture_placeholder,
			isUserInteracting = false,
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			lon = -90, onMouseDownLon = 0,
			lat = 0, onMouseDownLat = 0,
			phi = 0, theta = 0,
			target = new THREE.Vector3();

			init();

			function init() {

				var container, mesh;

				container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

				scene = new THREE.Scene();

				texture_placeholder = document.createElement( 'canvas' );
				texture_placeholder.width = 128;
				texture_placeholder.height = 128;

				var context = texture_placeholder.getContext( '2d' );
				context.fillStyle = 'rgb( 200, 200, 200 )';
				context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

				var materials = [

					loadTexture( 'textures/main/px.png' ), // right
					loadTexture( 'textures/main/nx.png' ), // left
					loadTexture( 'textures/main/py.png' ), // top
					loadTexture( 'textures/main/ny.png' ), // bottom
					loadTexture( 'textures/main/pz.png' ), // back
					loadTexture( 'textures/main/nz.png' )  // front

				];

				mesh = new THREE.Mesh( new THREE.CubeGeometry( 300, 300, 300, 7, 7, 7, materials ), new THREE.MeshFaceMaterial() );
				mesh.scale.x = - 1;
				scene.add( mesh );

				renderer = new THREE.CanvasRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function loadTexture( path ) {

				var texture = new THREE.Texture( texture_placeholder );
				var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: true } );

				var image = new Image();
				image.onload = function () {

					texture.needsUpdate = true;
					material.map.image = this;

					render();

				};
				image.src = path;

				return material;

			}

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				isUserInteracting = true;

				onPointerDownPointerX = event.clientX;
				onPointerDownPointerY = event.clientY;

				onPointerDownLon = lon;
				onPointerDownLat = lat;

			}

			function onDocumentMouseMove( event ) {

				if ( isUserInteracting ) {

					lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
					lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
					render();

				}

			}

			function onDocumentMouseUp( event ) {

				isUserInteracting = false;
				render();

			}

			function onDocumentMouseWheel( event ) {

				camera.fov -= event.wheelDeltaY * 0.05;
				camera.updateProjectionMatrix();

				render();

			}


			function onDocumentTouchStart( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					onPointerDownPointerX = event.touches[ 0 ].pageX;
					onPointerDownPointerY = event.touches[ 0 ].pageY;

					onPointerDownLon = lon;
					onPointerDownLat = lat;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
					lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

					render();

				}

			}

			function render() {

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = ( 90 - lat ) * Math.PI / 180;
				theta = lon * Math.PI / 180;

				target.x = 500 * Math.sin( phi ) * Math.cos( theta );
				target.y = 500 * Math.cos( phi );
				target.z = 500 * Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( target );

				renderer.render( scene, camera );

			}
