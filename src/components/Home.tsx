import { Canvas } from '@react-three/fiber';
import Showroom from './Showroom';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
    return (
        <div>
            <Canvas>
                <axesHelper args={[5]} />
                <gridHelper />
                <OrbitControls />
                <directionalLight position={[3, 3, 3]} />
                <Showroom />
            </Canvas>
        </div>
    );
};
export default Home;
