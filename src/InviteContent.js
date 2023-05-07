import styled from "styled-components";
import { Box, theme, H1, H2, H3, Detail } from "./Shared";
import Graphic from "./assets/graphic.png";

const InviteContent = () => {
  return (
    <Content>
      <ImageContainer>
        <StyledImage src={Graphic} />
      </ImageContainer>

      <TextContainer>
        <Title
          p={4}
          fontSize={[
            theme.fonts.size.h1 * 0.5,
            theme.fonts.size.h1 * 0.75,
            theme.fonts.size.h1,
          ]}
        >
          Divya and
          <br />
          Alexander
        </Title>

        <Box
          p={3}
          style={{
            placeSelf: "flex-end",
            width: "35%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <H2
            fontSize={[
              theme.fonts.size.h2 * 0.5,
              theme.fonts.size.h2 * 0.75,
              theme.fonts.size.h2,
            ]}
          >
            July 22, 2023
          </H2>
          <H3
            fontSize={[
              theme.fonts.size.h3 * 0.5,
              theme.fonts.size.h3 * 0.75,
              theme.fonts.size.h3,
            ]}
          >
            Nuptial Mass 2 PM
          </H3>
          <Detail
            mb={2}
            fontSize={[
              theme.fonts.size.detail * 0.7,
              theme.fonts.size.detail * 0.85,
              theme.fonts.size.detail,
            ]}
          >
            Church of St. Leo the Great 176 Ridgeway Avenue Oakland, California
          </Detail>

          <H3
            fontSize={[
              theme.fonts.size.h3 * 0.5,
              theme.fonts.size.h3 * 0.75,
              theme.fonts.size.h3,
            ]}
          >
            Dinner Receptioni 5 PM
          </H3>
          <Detail
            fontSize={[
              theme.fonts.size.detail * 0.7,
              theme.fonts.size.detail * 0.85,
              theme.fonts.size.detail,
            ]}
          >
            El Cerrito Community Center 7007 Moeser Lane El Cerrito, California
          </Detail>
          <Buttons
            width={1}
            fontSize={[
              theme.fonts.size.detail * 0.7,
              theme.fonts.size.detail * 0.85,
              theme.fonts.size.detail,
            ]}
          >
            <Clickable filled as="a" py={[1, 2, 2]} px={[1, 2, 4]}>
              RSVP
            </Clickable>
            <Clickable as="a" py={[1, 2, 2]} px={[1, 2, 4]}>
              Gifts
            </Clickable>
          </Buttons>

          <Detail
            fontSize={[
              theme.fonts.size.detail * 0.7,
              theme.fonts.size.detail * 0.85,
              theme.fonts.size.detail,
            ]}
          >
            Details to follow
          </Detail>
        </Box>
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
  justify-content: flex-start;
  gap: 1em;
`;

const Clickable = styled(H3)`
  display: flex;
  color: ${theme.colors.white};
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
