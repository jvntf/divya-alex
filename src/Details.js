import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import EventSection from "./EventSection";

const Details = () => {
  return (
    <TextContainer>
      <Title p={[2,4,4]} fontSize={[theme.fonts.size.h1mobile]}>
        Divya and
        <br />
        Alexander
      </Title>
      <EventSection />
    </TextContainer>
  );
};

export default Details;

const Title = styled(H1)`
  place-self: flex-start;
  max-width: 100%;

 @media screen and (max-width: 300px) {
    font-size: ${theme.fonts.size.h1mobile * 0.75 }px;
  }
 
  @media screen and (min-width: 450px) {
    font-size: ${theme.fonts.size.h1mobile * 1.5 }px;
  }
  @media screen and (min-width: 600px) {
    font-size: ${theme.fonts.size.h1}px;
  }
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
