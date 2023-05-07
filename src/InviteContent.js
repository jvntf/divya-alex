import styled from "styled-components";
import { Box, theme, H1, H2, H3 } from "./Shared";
import Graphic from "./assets/graphic.png";

const InviteContent = () => {
  return (
    <Content>
      <ImageContainer>
        <StyledImage src={Graphic} />
      </ImageContainer>

      <TextContainer>
        <Title p={4}>
          Divya and
          <br />
          Alexander
        </Title>
        <Buttons p={4}>
          <Clickable filled as="a">
            RSVP
          </Clickable>
          <Clickable as="a">Gifts</Clickable>
        </Buttons>
      </TextContainer>
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

const Title = styled(H1)`
  place-self: flex-start;
`;

const ImageContainer = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const StyledImage = styled.img`
  width: 100%;
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  place-self: flex-end;
`;

const Clickable = styled(H3)`
  background: white;
  ${(props) =>
    props.filled
      ? `background: ${theme.colors.primary}`
      : `border: 2px solid ${theme.colors.primary}`};

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }

  &:hover {
    cursor: pointer;
    animation: wiggle infinite 1s alternate;
  }
`;
