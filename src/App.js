import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Projects from './components/Projects/Projects';
import Break from './components/break/Break';



function App() {
  return (
    <div>
      <Home/>
      <Break/>
      <About/>
      <Break/>
      <Resume/>
      <Break/>
      <Projects/>
      <Break/>
      <Contact/>
    </div>
  );
}

export default App;
