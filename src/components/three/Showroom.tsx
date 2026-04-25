import { CameraControls, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import { Shoes } from '../Shoes';

const Showroom = () => {
    const cameraControlsRef = useRef<CameraControls>(null!);

    return (
        <>
            <directionalLight position={[3, 3, 3]} castShadow />
            <CameraControls minDistance={1} maxDistance={8} ref={cameraControlsRef} />
            <Shoes cameraControlsRef={cameraControlsRef} />
            <ContactShadows />
        </>
    );
};
export default Showroom;
