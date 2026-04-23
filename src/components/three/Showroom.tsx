import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Showroom = () => {
    const gltf = useGLTF('/models/custom.glb');
    const { raycaster } = useThree();

    const shoesClick = () => {
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);

        if (intersects.length > 0) {
            const firstObj = intersects[0].object as THREE.Mesh;
            const firstMat = firstObj.material as THREE.MeshStandardMaterial;
            const cloneMat = firstMat.clone();

            firstObj.material = cloneMat;
            const mat = firstObj.material as THREE.MeshStandardMaterial;

            mat.color = new THREE.Color('red');
        }
    };
    return (
        <>
            <primitive object={gltf.scene} onClick={shoesClick} />

            {/* <mesh
                rotation={[
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                ]}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh> */}
        </>
    );
};
export default Showroom;
