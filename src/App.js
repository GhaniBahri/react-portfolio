// import logo from './logo.svg';
// import './App.css';

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills"
import Projects from  "./components/Projects"

function App() {
  return (
    <main className="bg-black">
      <header className="">
        <NavBar/>
      </header>
      <HeroSection/>
      <Skills/>
      <Projects/>
    </main>
  );
}

export default App;
