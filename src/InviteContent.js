import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import Graphic from "./assets/graphic.png";
import Details from './Details';

const InviteContent = () => {
  return (
    <Content>
      <ImageContainer>
        <StyledImage src={Graphic} />
      </ImageContainer>
      <Details />
    </Content>
  );
};

export default InviteContent;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;


const ImageContainer = styled(Box)`
  img {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 65%;
  }
`;
const StyledImage = styled.img`
  width: 100%;
`;
