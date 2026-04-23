import { useGLTF } from '@react-three/drei';

const Showroom = () => {
    const gltf = useGLTF('/models/custom.glb');
    return (
        <>
            <primitive object={gltf.scene} />

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
