import styled from "styled-components";
import "./App.css";
import { Box } from "./Shared";
import Ticker from "./Ticker";
import InviteContent from "./InviteContent";

function App() {
  return (
    <div className="App">
      <Wrapper>
        {/*<Ticker /> */}
        <InviteContent />
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
  color: blue;
  position: absolute;
`;
