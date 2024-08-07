import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import { Container, Reveal } from "./style";

function App() {
  return (
    <Container>
      <Navbar />
      <div id="content">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
      </div>
    </Container>
  );
}

export default App;
