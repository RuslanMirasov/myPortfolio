import { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { Color, IcosahedronGeometry, MeshPhysicalMaterial } from 'three';
import CustomShaderMaterial from 'three-custom-shader-material';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils';
import vertexShader from './vertex.js';
import fragmentShader from './fragment.js';
import css from './Experience.module.scss';

const Experiment = ({ onLoaded }) => {
  const materialRef = useRef(null);
  const depthMaterialRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime;
    }

    if (depthMaterialRef.current) {
      depthMaterialRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  const geometry = useMemo(() => {
    const geometry = mergeVertices(new IcosahedronGeometry(1.3, 200));
    geometry.computeTangents();
    return geometry;
  }, []);

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new Color('#af00ff') },
    uGradientStrength: { value: 1 },
    uSpeed: { value: 3 },
    uNoiseStrength: { value: 0.3 },
    uDisplacementStrength: { value: 0.57 },
    uFractAmount: { value: 3 },
  };

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <>
      <mesh geometry={geometry} frustumCulled={false} position={[0, 0, 0]}>
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          silent
          roughness={0.5}
          metalness={0.76}
          reflectivity={0.46}
          clearcoat={0.5}
          ior={2.81}
          iridescence={0.69}
          uniforms={uniforms}
        />
        {/* <CustomShaderMaterial
          ref={depthMaterialRef}
          baseMaterial={MeshDepthMaterial}
          vertexShader={vertexShader}
          uniforms={uniforms}
          silent
          depthPacking={RGBADepthPacking}
          attach="customDepthMaterial"
        /> */}
      </mesh>
      <ambientLight color={'#fff'} intensity={1} />
      <directionalLight color={'#fff'} intensity={5} position={[-2, 2, 3.5]} />
    </>
  );
};

const Experience = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      document.body.classList.remove('loading');
    }
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={css.Experience}>
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{ alpha: true }}
      >
        <Suspense fallback={null}>
          <Experiment onLoaded={handleLoad} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Experience;
