import React,{useState} from 'react'
import Typical from 'react-typical';
import './home.css'
import menu from '../icons/menu.png';
import close from '../icons/close.png';
import pp from '../photos/profile.PNG';

const Home = () => {
    const[isMobile,setIsMobile]=useState(false);
  return (
    <div id='home'>
    <div className='topcontainer'>
        <div className='maindiv'>
          <div className='logo'>
              <h1>Blackneb</h1>
          </div>
          <div className='links'>
              <ul className={isMobile? "nav-links-mobile" : "homeul"} onClick={()=>setIsMobile(false)}>
                  <li className='homeli'><a href='#home'>Home</a></li>
                  <li className='homeli'><a href='#about'>About</a></li>
                  <li className='homeli'><a href='#resume'>Resume</a></li>
                  <li className='homeli'><a href='#contact'>Contact</a></li>
              </ul>
              <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
            {isMobile? <img src={close} alt="" className='close-style'/> : <img src={menu} alt="" className='menu-style'/> }
          </button>
          </div>
        </div>
        <div className='highlight'>
            <div className='title'>
                <h3>Hello, I am Anteneh</h3>
                <div className='wrapper'>  
                  <Typical
                    steps={[
                      'Web Developer', 2000,
                      'Game Designer',2000,
                      'React Js', 2000,
                      'Unity Game Engine',2000,
                      'Java FX',2000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  
                  />
                </div>
            </div>
            <div className='profilepic'>
              <img className='profilepp' src={pp} alt=''/>
            </div>
        </div>
        <div className='resdiv'>
        <a href='#resume' className='homegoresume'>View My Resume</a>
        </div>
        </div>
    </div>
  )
}

export default Home
