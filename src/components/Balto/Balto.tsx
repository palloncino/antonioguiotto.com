// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader

const ModelViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // Set alpha to true for transparent background
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

    // Set renderer background to transparent
    renderer.setClearColor(0x000000, 0); // Set background color to black with 0 opacity

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load('/models/scene.gltf', function (gltf) {
      const model = gltf.scene;
      model.position.set(0, -1, 0); // Set position x side, y tall, z zoom

      // Define mapping between texture files and model parts
      const textureMappings = [
        { part: 'chromes', texturePath: '/modules/textures/930_chromes_baseColor.png', roughnessPath: '/modules/textures/930_chromes_metallicRoughness.png' },
        { part: 'lights', texturePath: '/modules/textures/930_lights_baseColor.png', roughnessPath: '/modules/textures/930_lights_metallicRoughness.png', normalPath: '/modules/textures/930_lights_normal.png' },
        { part: 'plastics', texturePath: '/modules/textures/930_plastics_baseColor.png', roughnessPath: '/modules/textures/930_plastics_metallicRoughness.png' },
        { part: 'rim', texturePath: '/modules/textures/930_rim_baseColor.png', roughnessPath: '/modules/textures/930_rim_metallicRoughness.png', normalPath: '/modules/textures/930_rim_normal.png' },
        { part: 'stickers', texturePath: '/modules/textures/930_stickers_baseColor.png' },
        { part: 'tire', texturePath: '/modules/textures/930_tire_baseColor.png', roughnessPath: '/modules/textures/930_tire_metallicRoughness.png', normalPath: '/modules/textures/930_tire_normal.png' },
        { part: 'wunderbaum', texturePath: '/modules/textures/930_wunderbaum_baseColor.png', roughnessPath: '/modules/textures/930_wunderbaum_metallicRoughness.png' },
        { part: 'coat', texturePath: '/modules/textures/coat_baseColor.png', roughnessPath: '/modules/textures/coat_metallicRoughness.png' },
        { part: 'glass', texturePath: '/modules/textures/glass_baseColor.png', roughnessPath: '/modules/textures/glass_metallicRoughness.png' },
        { part: 'material_0', texturePath: '/modules/textures/material_0_baseColor.png' },
        { part: 'paint', texturePath: '/modules/textures/paint_clearcoat.png', roughnessPath: '/modules/textures/paint_clearcoat_roughness.png', normalPath: '/modules/textures/paint_clearcoat_normal.png' },
        { part: 'plate', texturePath: '/modules/textures/plate_baseColor.png', normalPath: '/modules/textures/plate_normal.png' }
      ];      

      // Loop through texture mappings
      textureMappings.forEach(mapping => {
        // Find the mesh corresponding to the part
        const mesh = model.getObjectByName(mapping.part);
        if (mesh) {
          // Load texture and apply it to the material
          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load(mapping.texturePath);
          mesh.material.map = texture;
        }
      });

      scene.add(model);
    });

    // Position camera further away
    camera.position.z = 4; // Increase z-position to move camera further away

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ModelViewer;
