import React, { Suspense } from 'react';
import { Cloud, Sky } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DynamicBackgroundContainer } from './styled/DynamicBackground.styled';

function Rig() {
    const camera = useThree(state => state.camera);
    return useFrame(() => {
        if (camera.position.z < -13) {
            camera.position.z = 8;
        } else {
            camera.position.z -= 0.01;
        }
    });
}

function DynamicBackground() {
    return (
        <DynamicBackgroundContainer>
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
                <ambientLight intensity={0.8} />
                <pointLight intensity={2} position={[0, 0, -1000]} />
                <Suspense fallback={null}>
                    <Cloud position={[2, 10, 5]} speed={0.2} opacity={0.75} />
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
                    <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
                    <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} />
                </Suspense>
                <Sky
                    azimuth={0.5}
                    turbidity={10}
                    rayleigh={0.5}
                    inclination={0.6}
                    distance={1000}
                />
                <Rig />
            </Canvas>
        </DynamicBackgroundContainer>
    );
}

export default DynamicBackground;
