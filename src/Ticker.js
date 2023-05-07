import styled from "styled-components";
import { Box, theme, H3 } from "./Shared";

const Ticker = () => {
  return (
    <Wrapper>
      <svg
        class="svgwave"
        xmlns="http://www.w3.org/2000/svg"
        //viewBox="-25 -25 326 326"
        viewBox="0 0 101 101"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          transform: "scale(0.99)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <path
          id="wavepath"
          d="M1.57861 1.40829H99.5786C99.8548 1.40829 100.079 1.63215 100.079 1.90829V100.408H74.9149H31.9031H1.57861C1.30247 100.408 1.07861 100.184 1.07861 99.9083V1.90829C1.07861 1.63215 1.30247 1.40829 1.57861 1.40829Z"
          style={{
            fill: "transparent",
            stroke: "transparent",
          }}
        ></path>
        <text
          text-anchor="left"
          style={{
            fontFamily: "Futura",
            fontSize: "2px",
            fill: `${theme.colors.primary}`,
          }}
        >
          <textPath
            //style=" fill-opacity: 1"
            href="#wavepath"
            side="left"
            startOffset="0%"
            textLength="175"
            id="text"
          >
            <animate
              attributeName="startOffset"
              from="0%"
              to="100%"
              begin="0s"
              dur="40s"
              repeatCount="indefinite"
            ></animate>
            Christine Farias and Gerard Farias together with Laura Axelsen and
            Feliciano de Jesús Mejía invite you to the wedding of their children
            -
          </textPath>
        </text>
      </svg>
    </Wrapper>
  );
};
export default Ticker;
const Wrapper = styled(Box)`
  #text {
    color: ${theme.colors.primary};
  }
  svg {
    display: none;
  }

  @media screen and (min-width: 600px) {
    svg {
      display: block;
    }
  }
`;
