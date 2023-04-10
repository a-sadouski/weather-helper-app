import React, {Suspense} from 'react';
import styled from "styled-components";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import { FaArchive } from 'react-icons/fa';
import { Cloud, Sky } from "@react-three/drei"

const InfoContainer = styled.div`
  position: relative;
  height: auto;
  flex-grow: 2;
`;

const DinamicBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`

const InfoWrapper = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`

const WeatherInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherInfoCard = styled.div`
  width: 375px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
`

const NoDataContainer = styled.div`
  position: relative;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoDataTitle = styled.h4`
  font-size: 24px;
  text-align: center;
  margin-top: 25px;
`;

function Rig() {
    const camera = useThree((state) => state.camera)
    return useFrame(() => {
        if (camera.position.z < -13) {
            camera.position.z = 8;
        } else {
            camera.position.z -= 0.01
        }
    })
}

function WeatherInfo({ weatherData }: any) {
    return (
        <InfoContainer>
            <DinamicBackground>
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
                    <Sky azimuth={0.5} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
                    <Rig />
                </Canvas>
            </DinamicBackground>
            <InfoWrapper>
                { weatherData.name
                    ?
                    <WeatherInfoContainer>
                        <WeatherInfoCard>
                            {/*{weatherData.main && weatherData.main.temp}*/}
                        </WeatherInfoCard>
                    </WeatherInfoContainer>
                    :
                    <NoDataContainer>
                        <FaArchive style={{color: "#000" , fontSize: '128px'}}></FaArchive>
                        <NoDataTitle>
                            No data
                            <br />
                            Please enter your location
                        </NoDataTitle>
                    </NoDataContainer>
                }
            </InfoWrapper>
        </InfoContainer>
    );
}

export default WeatherInfo;