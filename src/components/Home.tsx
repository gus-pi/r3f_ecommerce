import { Canvas } from '@react-three/fiber';
import Showroom from './three/Showroom';
import NavBar from './NavBar';
import ColorPicker from './ColorPicker';

const Home = () => {
    const angle = 0;
    const dis = 2;
    return (
        <>
            <NavBar />
            <Canvas
                style={{ width: '100vw', height: '100vh', background: '#b7f2f1' }}
                camera={{ position: [dis * Math.sin(angle), 0.8, dis * Math.cos(angle)] }}
            >
                {/* <axesHelper args={[5]} /> */}
                {/* <gridHelper />  */}
                {/* <color attach={'background'} args={[#b7f2f1]} /> */}
                <Showroom />
            </Canvas>
            <ColorPicker />
        </>
    );
};
export default Home;
