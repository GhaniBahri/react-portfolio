// import logo from './logo.svg';
// import './App.css';

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills"
import Projects from  "./components/Projects"
import Contact from "./components/Contact";
import ReactGA from "react-ga4";

function App() {
  const measurID= "G-HWZ4Q0NM9Z"
  ReactGA.initialize(measurID);
  ReactGA.send({ hitType: "pageview", page: "/"});
  return (
    <main className="bg-black">
      <header className="">
        <NavBar/>
      </header>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
