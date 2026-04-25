import { Canvas } from '@react-three/fiber';
import Showroom from './three/Showroom';

const Home = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <axesHelper args={[5]} />
            {/* <gridHelper />  */}
            <Showroom />
        </Canvas>
    );
};
export default Home;
