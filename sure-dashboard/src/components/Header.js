import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1; /* Take up 1/3 of the available space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex: 1; /* Take up the full width on smaller screens */
  }
`;

const Right = styled.div`
  flex: 2; /* Take up 2/3 of the available space */
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1; /* Take up the full width on smaller screens */
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 100%; /* Change the width to 100% for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  padding-left: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 15px;
  color: #666;
  padding-left: 40px;
  font-style: italic;
  letter-spacing: 0.5px;
`;


const Header = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>SURE Trust's Comprehensive Student Data Analytics</Title>
          <Subtitle>This dashboard aims to organize and analyze SURE Trust's student data using Python, Google Data Studio, and Sheets. We're uncovering enrollment patterns, demographics, and enrollment influencers through data cleaning and visualization to enhance SURE Trust's student management and experience.</Subtitle>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 150]} scale={2.4}>
                <MeshDistortMaterial
                  color="#0e144e"
                  attach="material"
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/dashboard.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Header;
