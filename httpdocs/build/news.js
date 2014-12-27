			var container_news, stats_news;
			var camera_news, scene_news, renderer_news;

			var video_news, image_news, imageContext_news,
			imageReflection_news, imageReflectionContext_news, imageReflectionGradient_news,
			texture_news, textureReflection_news;

			var mesh;

			var mouseX = 0;
			var mouseY = 0;

function show_news() {

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
      
 			init_news();
	  	animate_news();
      alert("1");
}

			function init_news() {
				container_news = document.createElement( 'div' );
				document.body.appendChild( container_news );

				camera_news = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
				camera_news.position.z = 1000;

				scene_news = new THREE.Scene();

				video_news = document.getElementById( 'video' );

				image_news = document.createElement( 'canvas' );
				image_news.width = 1280;
				image_news.height = 720;

				imageContext_news = image_news.getContext( '2d' );
				imageContext_news.fillStyle = '#000000';
				imageContext_news.fillRect( 0, 0, 480, 204 );

				texture_news = new THREE.Texture( image_news );
				texture_news.minFilter = THREE.LinearFilter;
				texture_news.magFilter = THREE.LinearFilter;

				var material_hdr = new THREE.MeshBasicMaterial( { map: texture_news, overdraw: true } );

				imageReflection_news = document.createElement( 'canvas' );
				imageReflection_news.width = 480;
				imageReflection_news.height = 204;

				imageReflectionContext_news = imageReflection.getContext( '2d' );
				imageReflectionContext_news.fillStyle = '#000000';
				imageReflectionContext_news.fillRect( 0, 0, 480, 204 );

				imageReflectionGradient_news = imageReflectionContext_news.createLinearGradient( 0, 0, 0, 204 );
				imageReflectionGradient_news.addColorStop( 0.2, 'rgba(240, 240, 240, 1)' );
				imageReflectionGradient_news.addColorStop( 1, 'rgba(240, 240, 240, 0.8)' );

				textureReflection_news = new THREE.Texture( imageReflection_news );
				textureReflection_news.minFilter = THREE.LinearFilter;
				textureReflection_news.magFilter = THREE.LinearFilter;

				var materialReflection = new THREE.MeshBasicMaterial( { map: textureReflection_news, side: THREE.BackSide, overdraw: true } );

				var plane = new THREE.PlaneGeometry( 480, 204, 4, 4 );

				mesh = new THREE.Mesh( plane, material_hdr );
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
				scene_news.add(mesh);

				mesh = new THREE.Mesh( plane, materialReflection );
				mesh.position.y = -306;
				mesh.rotation.x = - Math.PI;
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
				scene_news.add( mesh );

				var separation = 150;
				var amountx = 10;
				var amounty = 10;

				var PI2 = Math.PI * 2;
				var material = new THREE.ParticleCanvasMaterial( {

					color: 0x0808080,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 1, 0, PI2, true );
						context.closePath();
						context.fill();

					}

				} );

				for ( var ix = 0; ix < amountx; ix++ ) {

					for ( var iy = 0; iy < amounty; iy++ ) {

						particle = new THREE.Particle( material );
						particle.position.x = ix * separation - ( ( amountx * separation ) / 2 );
						particle.position.y = -153
						particle.position.z = iy * separation - ( ( amounty * separation ) / 2 );
						scene_news.add( particle );

					}

				}

				renderer_news = new THREE.CanvasRenderer();
				renderer_news.setSize( window.innerWidth, window.innerHeight );

				container_news.appendChild( renderer_news.domElement );

				stats_news = new Stats();
				stats_news.domElement.style.position = 'absolute';
				stats_news.domElement.style.top = '0px';
				container_news.appendChild( stats_news.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove_news, false );

				window.addEventListener( 'resize', onWindowResize_news, false );

			}

			function onWindowResize_news() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera_news.aspect = window.innerWidth / window.innerHeight;
				camera_news.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove_news( event ) {
				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY ) * 0.2;
			}

			function animate_news() {

				requestAnimationFrame( animate );

				render_news();
				stats_news.update();

			}

			function render_news() {

				camera_news.position.x += ( mouseX - camera_news.position.x ) * 0.05;
				camera_news.position.y += ( - mouseY - camera_news.position.y ) * 0.05;
				camera_news.lookAt( scene_news.position );

				if ( video_news.readyState === video_news.HAVE_ENOUGH_DATA ) {

					imageContext_news.drawImage( video_news, 0, 0 );

					if ( texture_news ) texture_news.needsUpdate = true;
					if ( textureReflection_news ) textureReflection_news.needsUpdate = true;
				}

				imageReflectionContext_news.drawImage( image_news, 0, 0 );
				imageReflectionContext_news.fillStyle = imageReflectionGradient_news;
				imageReflectionContext_news.fillRect( 0, 0, 480, 204 );

				renderer_news.render( scene_news, camera_news );
			}

