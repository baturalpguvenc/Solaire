import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: linear-gradient(135deg, #083432, #03AE5A, #00CF77, #C8F180, blue);
  color: white;

  h1 {
    font-family: "Satoshi Variable Black";
    font-size: 110pt;
    line-height: 99pt;
    letter-spacing: -15pt;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Termina Demi";
    font-size: 40pt;
    line-height: 48pt;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Termina Medium";
    font-size: 26pt;
    line-height: 31.2pt;
    text-transform: none;
  }

  p {
    font-family: "Satoshi Variable Medium";
    font-size: 26pt;
    line-height: 33.8pt;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero>
        <h1>HEADLINES</h1>
      </Hero>
      <Who>
        <h2>SUB-HEADERS</h2>
      </Who>
      <Works>
        <h3>2nd SUB-HEADERS OR HIGHLIGHTS</h3>
      </Works>
      <Contact>
        <p>BODY TEXT</p>
      </Contact>
    </Container>
  );
}

export default App;
