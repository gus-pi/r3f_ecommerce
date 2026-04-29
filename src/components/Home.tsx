import { Canvas } from '@react-three/fiber';
import Showroom from './three/Showroom';
import NavBar from './NavBar';
import ColorPicker from './ColorPicker';

const Home = () => {
    const angle = 0;
    const dis = 2;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBar />
            <div
                style={{
                    background: 'linear-gradient(180deg,#010514,#b7f2f1)',
                    flex: 1,
                    minHeight: 0,
                    position: 'relative',
                }}
            >
                <Canvas
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    camera={{ position: [dis * Math.sin(angle), 0.8, dis * Math.cos(angle)] }}
                >
                    {/* <axesHelper args={[5]} /> */}
                    {/* <gridHelper />  */}
                    {/* <color attach={'background'} args={[#b7f2f1]} /> */}
                    <Showroom />
                </Canvas>
            </div>
            <ColorPicker />
        </div>
    );
};
export default Home;
