import styled from "styled-components";
import Different from "./components/Different";
import FindOut from "./components/FindOut";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <Container>
      <Header />
      <main>
        <Home />
        <Different />
        <FindOut />
        <Footer />
      </main>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
