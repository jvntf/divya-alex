import styled from "styled-components";
import "./App.css";
import { Box, theme} from "./Shared";
import InviteContent from "./InviteContent";
import OneSideTicker from "./OneSideTicker";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <OneSideTicker />
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

  /*
  padding-bottom: 24px;

  @media screen and (min-width: 450px) {
    padding-bottom: 2.5%;
  }*/


  @media screen and (min-width: 450px) {
    height: 100%;
  }

`;
