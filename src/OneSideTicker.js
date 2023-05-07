import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import Leaf from "./assets/leaf_fill.png";
const OneSideTicker = () => {
  return (
    <Wrapper>
      <Marquee>
        <H3>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </H3>
        <Spacer src={Leaf} />
        <H3>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </H3>
        <Spacer src={Leaf} />
      </Marquee>

      <Marquee>
        <H3>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </H3>
        <Spacer src={Leaf} />
        <H3>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </H3>
        <Spacer src={Leaf} />
      </Marquee>
    </Wrapper>
  );
};

export default OneSideTicker;

const Marquee = styled(Box)`
  ${H3} {
    display: inline-block;
    color: ${theme.colors.primary};
    font-size:15px;
    margin: 2px 0;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const Wrapper = styled(Box)`
  border-bottom: 4px solid ${theme.colors.primary};
  order: 1;
  //height: 24px;
  //
  padding: 4px;

  @media screen and (min-width: 450px) {
    //height: 2.5vw;
    order: 2;
    border-bottom: unset;
    border-top: 4px solid ${theme.colors.primary};
  }

  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);

  ${Marquee} {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll 30s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
`;

const Spacer = styled.img`
  margin: auto auto;
  height: ${theme.fonts.size.button * 1.5}px;
  width: ${theme.fonts.size.button * 1.5}px;
`;
