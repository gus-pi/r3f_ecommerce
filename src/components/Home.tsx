import { Canvas } from '@react-three/fiber';
import Showroom from './three/Showroom';
import NavBar from './NavBar';
import ColorPicker from './ColorPicker';

const Home = () => {
    return (
        <>
            <NavBar />
            <Canvas style={{ width: '100vw', height: '100vh', background: '#b7f2f1' }}>
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
