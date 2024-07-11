import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

let scene, camera, renderer, controls;

function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.25, 100);
    camera.position.set(1, 1, 2);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // controls.minPolarAngle = Math.PI / 2; // Blocca la rotazione verticale
    // controls.maxPolarAngle = Math.PI / 2; // Blocca la rotazione verticale

    new RGBELoader()
        .setPath('/') // Modifica questo percorso
        .load('background-light.hdr', function(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            //scene.background = texture;
            scene.background = new THREE.Color(0x191919);
            scene.environment = texture;

            // GLTF Loader
            const loader = new GLTFLoader();
            loader.load('/colonnina-cwc.glb', function(gltf) {
                scene.add(gltf.scene);

                // Center the model
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const center = box.getCenter(new THREE.Vector3());
                controls.target.copy(center);
                controls.update();

                // Adjust camera position manually
                camera.position.set(center.x, center.y, center.z + 1.25);
                controls.update();
            }, undefined, function(error) {
                console.error('An error occurred while loading the GLB file:', error);
            });
    });

    window.addEventListener('resize', onWindowResize, false);
    
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

init();

