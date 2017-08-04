
function VRSlides() {}

VRSlides.prototype = {
	init: function() {
		var self = this;
		// 初始化场景
		this.scene = new THREE.Scene();

		// 初始化相机
		this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
		this.camera.position.set( 0, 100, 200 );
		// this.cameraTarget = new THREE.Vector3( 0, 150, 0 );
		this.scene.add(this.camera);

		// 创建光源
		var pointLight = new THREE.PointLight( 0xffffff, 1.5 );
		pointLight.position.set( 0, 100, 200 );
		pointLight.color.setHex( 0xffffff );
		this.scene.add( pointLight );

		// 创建地面
		var gg = new THREE.PlaneBufferGeometry( 2000, 2000 );
		var gm = new THREE.MeshPhongMaterial( { color: 0xfff000 } );
		this.ground = new THREE.Mesh( gg, gm );
		this.ground.rotation.x = - Math.PI / 2;
		this.ground.receiveShadow = true;
		this.scene.add( this.ground );
		console.log(this.ground.position)
		console.log(this.ground.rotation)

		// 初始化渲染器
		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setSize(window.innerWidth,window.innerHeight);
		this.renderer.setClearColor(0x519EcB);
		this.renderer.shadowMapEnabled = true;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		document.querySelector('.vr-slides').appendChild(this.renderer.domElement);

		// 初始化VR视觉控件
		this.initVR();
		// 创建 slide 图层
		this.addTitle('Hello World');
		this.addContent('This is content, This is content');
		this.addImage('images/ground.jpg');

		// 事件绑定
		this.bindEvent();
		this.render();
	},
	initVR() {
		// 初始化VR视觉控件
		this.effect = new THREE.VREffect(this.renderer);
		this.controls = new THREE.VRControls(this.camera);
		// this.controls.standing = true;

		// Initialize the WebVR manager.
		this.manager = new WebVRManager(this.renderer, this.effect);
	},
	addTitle: function(text) {
		var loader = new THREE.FontLoader();
		var self = this;

		loader.load( './lib/fonts/helvetiker_regular.typeface.json', function ( font ) {
			var geometry = new THREE.TextGeometry( text, {
				font: font,
				size: 30, // 文字高度
				height: 10, // 文字厚度
				curveSegments: 2, // 分辨率 

				bevelThickness: 0.5,
				bevelSize: 1.5, 
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
			mesh.position.set(centerOffset, 150, -300);
			self.scene.add(mesh);
		});

	},
	addContent: function(text) {

		var loader = new THREE.FontLoader();
		var self = this;

		loader.load( './lib/fonts/helvetiker_regular.typeface.json', function ( font ) {
			var geometry = new THREE.TextGeometry( text, {
				font: font,
				size: 20, // 文字高度
				height: 5, // 文字厚度
				curveSegments: 2, // 分辨率 

				bevelThickness: 0.5,
				bevelSize: 1.5, 
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
			mesh.position.set(centerOffset, 100, -300);
			self.scene.add(mesh);
		});
	},
	addImage: function(path) {
		var self = this;
		new THREE.ImageBitmapLoader()
		.setOptions( { imageOrientation: 'none' } )
		.load( path + '?' + performance.now(), function( image ) {
			var texture = new THREE.CanvasTexture( image );
			var material = new THREE.MeshBasicMaterial( { map: texture } );

			var geometry = new THREE.BoxBufferGeometry( 100,100,100 );
			var cube = new THREE.Mesh( geometry, material );
			cube.position.set(0, 0, -300);
			self.scene.add( cube );
		});
	},
	createSlide: function(index, slideElm) {
		
	},
	moveToSlide: function(index) {
		
	},
	slide: function(index, slideElm) {
		this.slides = this.slides || [];
		if (this.slides[index]) {
			this.moveToSlide(index);
		} else {
			this.createSlide(index, slideElm);
		}
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
	createLight: function() {
		// 创建光线
		this.scene.add(new THREE.AmbientLight(0xFFFFFF));
		var light = new THREE.DirectionalLight( 0xffffff, 0.3 );
		light.position.set( 50, 50, 50 );
		light.castShadow = true;
		light.shadow.mapSize.width = 2048;
		light.shadow.mapSize.height = 512;
		light.shadow.camera.near = 100;
		light.shadow.camera.far = 1200;
		light.shadow.camera.left = -1000;
		light.shadow.camera.right = 1000;
		light.shadow.camera.top = 350;
		light.shadow.camera.bottom = -350;
		this.scene.add( light );
	},
	render: function() {
		// 启动渲染
		var self = this;
		// this.camera.lookAt(this.cameraTarget);
		var render = function() {
			self.controls.update();
			self.manager.render(self.scene, self.camera);
			requestAnimationFrame(render);
		}
		render();
	}
};