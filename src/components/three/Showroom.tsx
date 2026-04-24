import { CameraControls, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Showroom = () => {
    const gltf = useGLTF('/models/custom.glb');
    const { raycaster } = useThree();

    // window.addEventListener('keydown', (e) => {
    //     console.log(e);
    // });

    useEffect(() => {
        cameraControlsRef.current.setTarget(0, 0, 0, false);
    });

    let angle = 0;
    let dis = 2;

    useFrame(() => {
        cameraControlsRef.current.setPosition(dis * Math.sin(angle), 0.8, dis * Math.cos(angle));
        angle += 0.01;
    });

    const cameraControlsRef = useRef<CameraControls>(null!);

    const shoesClick = () => {
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);

        if (intersects.length > 0) {
            const firstObj = intersects[0].object as THREE.Mesh;
            const firstMat = firstObj.material as THREE.MeshStandardMaterial;
            const cloneMat = firstMat.clone();

            firstObj.material = cloneMat;
            const mat = firstObj.material as THREE.MeshStandardMaterial;

            mat.color = new THREE.Color('red');

            cameraControlsRef.current.fitToBox(
                firstObj,
                true,
                //     {
                //     paddingLeft: 0,
                //     paddingRight: 0,
                //     paddingBottom: 1,
                //     paddingTop: 2,
                // }
            );
        }
    };
    return (
        <>
            <directionalLight position={[3, 3, 3]} />
            <CameraControls minDistance={0.5} maxDistance={10} ref={cameraControlsRef} />
            <primitive object={gltf.scene} onClick={shoesClick} />
        </>
    );
};
export default Showroom;
