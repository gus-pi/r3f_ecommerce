import { useProgress } from '@react-three/drei';

const LoadingScreen = () => {
    const { progress, active } = useProgress();
    const visible = active || progress < 100;

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background: 'linear-gradient(180deg, #010514, #b7f2f1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                gap: 16,
            }}
        >
            <div style={{ fontSize: 14, letterSpacing: '0.15em', opacity: 0.7 }}>Loading...</div>
            <div
                style={{
                    width: 200,
                    height: 2,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: 1,
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: 'white',
                        borderRadius: 1,
                        transition: 'width 0.15s ease-out',
                    }}
                />
            </div>
            <div style={{ fontSize: 12, opacity: 0.5 }}>{Math.round(progress)}%</div>
        </div>
    );
};

export default LoadingScreen;
