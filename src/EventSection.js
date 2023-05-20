import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";

const Event = () => {
  return (
    <Wrap>
      <H2 fontSize={[theme.fonts.size.h2]} mb={theme.fonts.size.h2}>
        July 22, 2023
      </H2>
      <Box
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "16px",
        }}
      >
        <H3 fontSize={[theme.fonts.size.h3]}>Nuptial Mass</H3>
        <Detail bold>1 PM</Detail>
      </Box>
      <Detail mb={theme.fonts.size.h3} fontSize={[theme.fonts.size.detail]}>
        Church of St. Leo the Great
        <br />
        176 Ridgeway Avenue
        <br />
        Oakland, California
      </Detail>

      <Box
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "16px",
        }}
      >
        <H3 fontSize={[theme.fonts.size.h3]}>Dinner Reception</H3>

        <Detail bold>5 PM</Detail>
      </Box>

      <Detail fontSize={[theme.fonts.size.detail]} mb={theme.fonts.size.h3}>
        El Cerrito Community Center
        <br />
        7007 Moeser Lane
        <br />
        El Cerrito, California
      </Detail>
      <Buttons width={1} fontSize={[theme.fonts.size.detail]}>
        <Clickable
          filled
          as="a"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdqH1k9H53HMjDIRRaXFBRaohCFmTwd7EVTdsxH7buSDetnWw/viewform?usp=sf_link"
        >
          RSVP
        </Clickable>
        <GiftsButton as="a" filled />
      </Buttons>

      <Detail mt={theme.fonts.size.detail} fontSize={[theme.fonts.size.detail]}>More details to follow</Detail>
    </Wrap>
  );
};

export default Event;

const Buttons = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  gap: 1em;
`;

const Clickable = styled(H3)`
  display: flex;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 15px;
  text-decoration: none;
  padding: 4px;
  box-sizing: border-box;
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

const GiftsButton = styled(Clickable)`
  ::after {
    content: 'Gifts';
  }

  :hover {
    background: white;
    outline: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    cursor: wait;
    :: after {
    content: 'Coming Soon';
    }
  }
`;

const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 220px;
  max-width: 80%;
  place-self: flex-start;

  @media screen and (min-width: 450px) {
    place-self: flex-end;
  }
`;
