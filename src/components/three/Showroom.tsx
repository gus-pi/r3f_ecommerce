import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Showroom = () => {
    const gltf = useLoader(GLTFLoader, './models/Shoe.glb');
    return (
        <>
            <group scale={100}>
                <primitive object={gltf.scene} />
            </group>
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
