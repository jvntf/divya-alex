import styled from "styled-components";
import { Box, theme, H3 } from "./Shared";

const Ticker = () => {
  return (
    <Wrapper>
      <svg
        class="svgwave"
        xmlns="http://www.w3.org/2000/svg"
        //viewBox="-25 -25 326 326"
        viewBox="0 0 301 301"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          transform: "scale(0.90)",
        }}
      >
        <path
          id="wavepath"
          d="M145.5 301.5H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5"
          style={{
            fill: "transparent",
            stroke: "transparent",
            strokeWidth: "1px",
          }}
        ></path>
        <text
          text-anchor="left"
          style={{
            fontSize: `${theme.fonts.size.h3}`,
            fill: `${theme.colors.primary}`,
          }}
        >
          <textPath
            //style=" fill-opacity: 1"
            href="#wavepath"
            side="left"
            startOffset="0%"
            textLength="900"
            id="text"
          >
            <animate
              attributeName="startOffset"
              from="20%"
              to="42%"
              begin="0s"
              dur="50s"
              repeatCount="indefinite"
            ></animate>
           Christine Farias and Gerard Farias together with Laura Axelsen and Feliciano de Jesús Mejía invite you to the wedding of their children -  
          </textPath>
        </text>
      </svg>
    </Wrapper>
  );
};
export default Ticker;
const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;

  #text {
    font-size: ${theme.fonts.size.h3}px;
    color: ${theme.colors.primary};
  }
`;
