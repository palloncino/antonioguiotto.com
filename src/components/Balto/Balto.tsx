// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import './Balto.css';

const Balto = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increase intensity
    scene.add(ambientLight);

    // Load 3D model
    const loader = new GLTFLoader(); // Use GLTFLoader for GLB/GLTF files
    loader.load('balto.glb', function (gltf) {
      const balto = gltf.scene;
      balto.position.set(0, 0, 0); // Set position
      scene.add(balto);
    });

    // Position camera
    camera.position.set(0, 0, 5); // Adjust camera position
    camera.lookAt(0, 0, 0); // Look at the center of the scene

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      // Dispose Three.js resources, if needed
    };
  }, []);

  return <canvas ref={canvasRef} className="three-balto-canvas" />;
};

export default Balto;
