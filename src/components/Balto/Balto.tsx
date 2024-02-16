// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader'; // Import TextureLoader

const ModelViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
    renderer.setClearColor(0x000000, 0);

    const loader = new GLTFLoader();
    const textureLoader = new TextureLoader(); // Instantiate TextureLoader

    loader.load('/models/scene.gltf', function (gltf) {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      scene.add(model);

      // Traverse through model to find materials with textures
      model.traverse((child) => {
        if (child.isMesh) {
          const material = child.material;
          console.log("Material:", material);
          if (material.map && material.name) { // Check if material has a map and a name
            console.log("Texture:", material.name);
            const texture = textureLoader.load(`/models/textures/${material.name}`);
            material.map = texture;
            material.needsUpdate = true;
          }
        }
      });
      

    });

    camera.position.set(0, 2, 4);
    camera.lookAt(0, 1, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ModelViewer;
