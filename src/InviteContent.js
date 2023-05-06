import styled from "styled-components";
import { Box, Text, theme, H1, H2, H3 } from "./Shared";
import Graphic from "./assets/graphic.png";

const InviteContent = () => {
  return (
    <Content>
        <Title p={4}>Divya and Alex</Title>
      <StyledImage src={Graphic} />
      <Buttons p={4}>
        <Clickable as="a">RSVP</Clickable>
        <Clickable as="a">Gifts</Clickable>
      </Buttons>
    </Content>
  );
};
export default InviteContent;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${theme.colors.background};
`;

const Title = styled(H1)`
  place-self: flex-start;
  background: white;
  border: 2px solid ${theme.primary};
`;
const StyledImage = styled.img`
  max-height: 60%;
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  place-self: flex-end;
  background: white;
  border: 2px solid ${theme.colors.primary};
`;

const Clickable = styled(H3)`
  background: white;
  border: 2px solid ${theme.colors.primary};

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
  :hover {
    cursor: pointer;
    animation: wiggle infinite 1s alternate;
  }
`;
