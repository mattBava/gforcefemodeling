import "../App.css";
import BeforeAfter from "./BeforeAfter";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <div className="container">
      <Home />
      <BeforeAfter />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
