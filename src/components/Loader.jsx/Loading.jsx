// src/components/FullScreenLoader.js
import styled, { keyframes } from "styled-components";
import { LazyImage } from "../../UI/Elements";
import { Logo } from "../../UI/AllImages";



const Loading = () => (
    <LoaderWrapper>
        <AnimatedImage>
            <LazyImage src={Logo} alt="Loading..." />
        </AnimatedImage>
    </LoaderWrapper>
);

export default Loading;

// 👇 Up-Down animation keyframes
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// 👇 Main loader wrapper
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.96);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 👇 Animated wrapper for the logo
const AnimatedImage = styled.div`
  animation: ${bounce} 1s ease-in-out infinite;
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: auto;
  }
`;
