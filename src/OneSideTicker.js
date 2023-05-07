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
    </Wrapper>
  );
};

export default OneSideTicker;

const Wrapper = styled(Box)`
  //position: absolute;
  background: white;
  max-width: 100%;
  overflow: hidden;
  border-bottom: 4px solid ${theme.colors.primary};
  order: 1;

  top: 0;
  left: 0;
  //height: 24px;

  @media screen and (min-width: 450px) {
    order: 2;
    border-bottom: unset;
    border-top: 4px solid ${theme.colors.primary};
    top: unset;
    bottom: 0;
    //height: 2.5vw;
  }

  * {
    vertical-align: middle;
  }
`;

const Marquee = styled(Box)`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;

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
const Spacer = styled.img`
  margin: 0 4px;
  height: ${theme.fonts.size.detail * 1.5}px;
  width: ${theme.fonts.size.detail * 1.5}px;
`;
