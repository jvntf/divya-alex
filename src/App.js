import styled from "styled-components";
import "./App.css";
import { Box, theme} from "./Shared";
import Ticker from "./Ticker";
import InviteContent from "./InviteContent";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Box
          width={1}
          height={'100%'}
          style={{
            display: 'flex',
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
  position: absolute;
  width: 100%;
  min-height: 100%;

  display:flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 32px;

  @media screen and (min-width: 450px) {
    height: 100%;
  }

`;
