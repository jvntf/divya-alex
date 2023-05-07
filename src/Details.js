import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import EventSection from './EventSection'

const Details = () => {
  return (
    <TextContainer>
      <Title p={4} fontSize={[theme.fonts.size.h1]}>
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
