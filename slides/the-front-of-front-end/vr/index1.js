var pages = {
	1: [{
		type: 'image',
		src: 'images/qr-code.png',
		y: 0
	}, {
		type: 'image',
		src: 'images/qr-code.png',
		y: 0
	}],
	2: [{
		type: 'title',
		text: '“最”前端',
		y: 0
	}]
};

function VRSlides() {}

VRSlides.prototype = {
	init: function() {
		var self = this;
		// 初始化场景
		this.scene = new THREE.Scene();

		// 初始化相机
		this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
		this.camera.position.set( 0, 0, 0 );
		this.scene.add(this.camera);
		this.group = new THREE.Group();

		// 创建光源
		this.pointLight = new THREE.PointLight( 0xffffff, 1 );
		this.pointLight.position.set( 0, -100, 0 );
		this.pointLight.color.setHex( 0xffffff );
		this.scene.add( this.pointLight );

		// 创建地面
		new THREE.ImageBitmapLoader()
		.setOptions( { imageOrientation: 'none' } )
		.load( 'images/ground.jpg?' + performance.now(), function( image ) {
			var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
			var texture = new THREE.CanvasTexture( image );
			var material = new THREE.MeshBasicMaterial( { 
        map: texture, 
        // side: THREE.DoubleSide 
      });
			var ground = new THREE.Mesh( geometry, material );
		  ground.rotation.x = - Math.PI / 2;
		  ground.position.y = -5;
		  ground.position.z = -15;
		  ground.receiveShadow = true;
			self.scene.add( ground );
		});

    // 创建天空和远山
		new THREE.ImageBitmapLoader()
		.setOptions( { imageOrientation: 'none' } )
		.load( 'images/sky.jpg?' + performance.now(), function( image ) {
      var geometry = new THREE.SphereBufferGeometry(100, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 6);
			var texture = new THREE.CanvasTexture( image );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 5, 1 );
      var material = new THREE.MeshBasicMaterial( {
        map: texture, 
        // color: 0xfff000, 
        // side: THREE.DoubleSide 
        // side: THREE.FrontSide 
        side: THREE.BackSide
      } );
      var sphere = new THREE.Mesh( geometry, material );
		  sphere.rotation.z = - Math.PI;
		  sphere.position.z = 0;

      self.scene.add( sphere );
		});

		// 初始化渲染器
		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setSize(window.innerWidth,window.innerHeight);
		this.renderer.setClearColor(0x519EcB);
		this.renderer.setClearColor(0x000000);
		this.renderer.shadowMapEnabled = true;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		document.querySelector('.vr-slides').appendChild(this.renderer.domElement);

		// Initialize the WebVR UI.
		// var uiOptions = {
		// 	color: 'black',
		// 	background: 'white',
		// 	corners: 'square'
		// };
		// var vrButton = new webvrui.EnterVRButton(this.renderer.domElement, uiOptions);
		// document.getElementById('vr-button').appendChild(vrButton.domElement);

		// 初始化VR视觉控件
		this.initVR();

		// 事件绑定
		this.bindEvent();
		this.render();
	},
	addTitle: function(text) {
		var loader = new THREE.FontLoader();
		var self = this;

		loader.load( './lib/fonts/helvetiker_regular.typeface.json', function ( font ) {
			var geometry = new THREE.TextGeometry( text, {
				font: font,
				size: 3, // 文字高度
				height: 0.5, // 文字厚度
				curveSegments: 5, // 分辨率 

				bevelThickness: 0.05,
				bevelSize: 0.05, 
				bevelEnabled: true,

				material: 0,
				extrudeMaterial: 1
			});
			geometry.computeBoundingBox();
			geometry.computeVertexNormals();

			var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
			var materials = [
				new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
				new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
			];
			var mesh = new THREE.Mesh( geometry, materials );
			// mesh.position.set(centerOffset, 530, -80);
			// mesh.position.set(centerOffset, 120, -80);
			mesh.position.set(centerOffset, 12, 0);

			// self.scene.remove(self.group);
			// self.group = new THREE.Group();
			// self.group.position.z = -100;
			self.group.add( mesh );
			// self.scene.add( self.group );
		});
	},
	addContent: function(text) {
		var loader = new THREE.FontLoader();
		var self = this;

		loader.load( './lib/fonts/helvetiker_regular.typeface.json', function ( font ) {
			var geometry = new THREE.TextGeometry( text, {
				font: font,
				size: 1, // 文字高度
				height: 0, // 文字厚度
				curveSegments: 5, // 分辨率 

				material: 0,
				extrudeMaterial: 1
			});
			geometry.computeBoundingBox();
			geometry.computeVertexNormals();

			var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
			var materials = [
				new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
				new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
			];
			var mesh = new THREE.Mesh( geometry, materials );
			mesh.position.set(centerOffset, 6, 0);

			// self.scene.remove(self.group);
			// self.group = new THREE.Group();
			// self.group.position.z = -100;
			self.group.add( mesh );
			// self.scene.add( self.group );
		});
	},
	addImage: function(path) {
		var self = this;
		new THREE.ImageBitmapLoader()
		.setOptions( { imageOrientation: 'none' } )
		.load( path + '?' + performance.now(), function( image ) {
			var texture = new THREE.CanvasTexture( image );
			var material = new THREE.MeshBasicMaterial( { map: texture } );

			var geometry = new THREE.BoxBufferGeometry( 3,3,3 );
			var box = new THREE.Mesh( geometry, material );
			box.position.set(0, 0, 0);

			self.group.add( box );
			// self.scene.add( self.group );
		});
	},
	initVR() {
		// 初始化VR视觉控件
		this.effect = new THREE.VREffect(this.renderer);
		this.controls = new THREE.VRControls(this.camera);

		// Initialize the WebVR manager.
		this.manager = new WebVRManager(this.renderer, this.effect);
	},
	bindEvent: function() {
		var self = this;
		window.addEventListener( 'resize', function() {
			// 窗口调整重新调整渲染器
			self.camera.aspect = window.innerWidth / window.innerHeight;
			self.camera.updateProjectionMatrix();
			self.effect.setSize(window.innerWidth, window.innerHeight);
		}, false );
	},
	render: function() {
		// 启动渲染
		var self = this;
		// this.camera.lookAt(this.cameraTarget);
		var render = function() {
			if(!self.fadeOut && self.group.position.z < -80) {
				self.group.position.z += 1;
			} else if(self.fadeOut) {
				self.group.position.z += 3;
				if(self.group.position.z > 20) {
					self.fadeOut = false;

					self.scene.remove(self.group);
					self.group = new THREE.Group();
					self.scene.add(self.group);
				}
			} 
      // self.camera.position.z += 0.5;
      // console.log(self.camera.position.z)
      // self.pointLight.position.y -= 0.1;
			self.controls.update();
			self.manager.render(self.scene, self.camera);
			// self.effect.render(self.scene, self.camera);
			requestAnimationFrame(render);
		}
		render();
	},
	next: function() {
		this.fadeOut = true;
		var self = this;
		setTimeout(function() {
			self.group.position.z = -100;
			
			self.addTitle('Hello World');
			self.addContent('This is Content');
			// self.addImage('images/qr-code.png');
		}, 800);
	},
	currentIndex: 0
};