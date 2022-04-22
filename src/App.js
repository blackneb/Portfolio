import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
