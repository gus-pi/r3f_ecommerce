import { CameraControls, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import { Shoes } from '../Shoes';

const Showroom = () => {
    const cameraControlsRef = useRef<CameraControls>(null!);

    return (
        <>
            <directionalLight position={[3, 3, 3]} />
            <CameraControls minDistance={1} maxDistance={8} ref={cameraControlsRef} />
            <Shoes cameraControlsRef={cameraControlsRef} />

            <ContactShadows scale={5} color="#000000" resolution={512} opacity={0.8} blur={0.5} />
        </>
    );
};
export default Showroom;
