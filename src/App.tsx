import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import { Container } from "./style";

function App() {
  return (
    <Container>
      <Navbar />
      <div id="content">
        <Hero />
        <About />
      </div>
    </Container>
  );
}

export default App;
