import { Canvas } from '@react-three/fiber';
import Showroom from './three/Showroom';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
                <axesHelper args={[5]} />
                <gridHelper />
                <OrbitControls />
                <directionalLight position={[3, 3, 3]} />
                <Showroom />
            </Canvas>
    );
};
export default Home;
