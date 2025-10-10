import "./App.css";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { SectionBookGrid } from "./components/SectionBookGrid";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionBookGrid data={books} />
    </>
  );
}

export default App;
