import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import Graphic from "./assets/graphic.png";
import Details from "./Details";

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
  height: fit-content;
  min-height: 100%;
  background-color: ${theme.colors.background};

  @media screen and (min-width: 450px) {
    height: 100%;
    min-height: 100%;
  }
`;

const ImageContainer = styled(Box)`
  padding: 32px 32px 0 32px;
  box-sizing: border-box;
  img {
    position: relative;
    max-width: 100%;
  }
  @media screen and (max-width: 250px) {
    img {
      display: none;
    }
  }

  @media screen and (min-width: 450px) {
  padding: 0px;
    img {
      position: absolute;
      z-index: 1;
      bottom: 36px;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 55%;
      max-width: 70vh;
    }
  }
`;
const StyledImage = styled.img``;
