import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import Leaf from "./assets/leaf_fill.png";
const OneSideTicker = () => {
  return (
    <Wrapper>
      <Marquee>
        <Detail>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </Detail>
        <Spacer src={Leaf} />
        <Detail>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </Detail>
        <Spacer src={Leaf} />
      </Marquee>

      <Marquee>
        <Detail>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </Detail>
        <Spacer src={Leaf} />
        <Detail>
          Christine Farias and Gerard Farias together with Laura Axelsen and
          Feliciano de Jesús Mejía invite you to the wedding of their children
        </Detail>
        <Spacer src={Leaf} />
      </Marquee>

    </Wrapper>
  );
};

export default OneSideTicker;

const Marquee = styled(Box)`

/*
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;
  */

  ${Detail} {
    display: inline-block;
    color: ${theme.colors.primary};
    font-size: 1vw;
    margin: 0.5vw 0;
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

  @media screen and (min-width: 450px) {
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
  gap: var(--gap);
  min-width: 100%;
  animation: scroll 20s linear infinite;
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
  margin: auto 4px;
  height: ${theme.fonts.size.detail * 1.5}px;
  width: ${theme.fonts.size.detail * 1.5}px;
`;
