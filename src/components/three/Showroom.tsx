import { CameraControls, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import { Shoes } from './Shoes';
import * as THREE from 'three';

const Showroom = () => {
    const cameraControlsRef = useRef<CameraControls>(null!);

    return (
        <>
            <directionalLight position={[3, 3, 3]} />
            <ambientLight intensity={0.5} />
            <CameraControls
                minDistance={1}
                maxDistance={3}
                ref={cameraControlsRef}
                maxPolarAngle={THREE.MathUtils.degToRad(80)}
            />
            <Shoes cameraControlsRef={cameraControlsRef} />
            <ContactShadows scale={5} color="#000000" resolution={512} opacity={0.8} blur={0.5} />
        </>
    );
};
export default Showroom;
