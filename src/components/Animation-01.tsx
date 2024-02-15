import React, { FC, useEffect, useRef } from 'react';

const EclipseAnimation: FC<any> = () => {

  const mountRef = useRef<HTMLDivElement>(null);

  const importAndExecuteThreeJs = async () => {
    const THREE = await import('three');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 1);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const updateSize = () => {
      const previewMedia = document.querySelector('.preview-media');
      if (previewMedia && mountRef.current) {
        const { width, height } = previewMedia.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    updateSize();

    window.addEventListener('resize', updateSize);


    // rest of the code


    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', updateSize);
    };
  }

  useEffect(() => {
    importAndExecuteThreeJs();
  }, []);

  return <div id="EclipseAnimation" className="EclipseAnimation" ref={mountRef} />;

}

export default EclipseAnimation;