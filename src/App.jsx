import styled from "styled-components";
import mountainImg from "./images/bg-desktop-light.jpg";

function App() {
  return <MainSection>hello</MainSection>;
}

export default App;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mountainImg});
  background-repeat: no-repeat;
  background-size: 100% 30%;
`;
