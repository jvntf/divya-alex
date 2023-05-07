import styled from "styled-components";
import "./App.css";
import { Box, theme} from "./Shared";
import Ticker from "./Ticker";
import InviteContent from "./InviteContent";

function App() {
  return (
    <div className="App">
      <Wrapper>

        <Ticker />
        <Box

          backgroundColor={theme.colors.background}
          width={1}
          height={'100%'}
          style={{
            display: 'flex',
            border: '32px solid white',
            boxSizing: 'border-box'
          }}
        >
        <InviteContent />
        </Box>
      </Wrapper>
    </div>
  );
}

export default App;
const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  box-sizing: border-box;
`;
