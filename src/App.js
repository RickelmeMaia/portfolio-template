import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
