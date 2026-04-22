import * as THREE from 'three';

const Showroom = () => {
    return (
        <>
            <mesh
                rotation={[
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                ]}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    );
};
export default Showroom;
