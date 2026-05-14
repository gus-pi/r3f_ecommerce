import {
    CameraControls,
    ContactShadows,
    Environment,
    MeshReflectorMaterial,
} from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { Shoes } from './Shoes';
import * as THREE from 'three';

const PLATFORM_CENTER = new THREE.Vector3(0, 0.1, 0.3);

const Showroom = () => {
    const cameraControlsRef = useRef<CameraControls>(null!);

    useEffect(() => {
        cameraControlsRef.current.setTarget(
            PLATFORM_CENTER.x,
            PLATFORM_CENTER.y,
            PLATFORM_CENTER.z,
            false
        );
    }, []);

    return (
        <>
            {/* <directionalLight position={[3, 3, 3]} />
            <ambientLight intensity={0.5} /> */}
            <Environment preset="forest" />
            <CameraControls
                minDistance={1}
                maxDistance={3}
                ref={cameraControlsRef}
                maxPolarAngle={THREE.MathUtils.degToRad(80)}
            />
            <Suspense fallback={null}>
                <Shoes cameraControlsRef={cameraControlsRef} />
            </Suspense>
            <ContactShadows scale={5} color="#000000" resolution={512} opacity={0.8} blur={0.5} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0.3]}>
                <circleGeometry args={[1.2, 64]} />
                <MeshReflectorMaterial
                    blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
                    mixBlur={0} // How much blur mixes with surface roughness (default = 1)
                    mixStrength={1} // Strength of the reflections
                    mixContrast={1} // Contrast of the reflections
                    resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                    mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                    depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
                />
            </mesh>
        </>
    );
};
export default Showroom;
