import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='top-about-main' id='about'>
        <h3>About Me</h3>
        <div className='main-about'>
            <div className='about-content'>
              <p className='contentparagraph'>
                Hi i am Anteneh Solomon and i am learning computer science and enginnering 
                at adama science and technology university. Currently i am working on Front
                end enginnering and game designing. I would love to create beautiful and
                performant products with delightful user experience.
              </p>
              <p>

              </p>
              <ul className='contentlists'>
                <li>Web Development</li>
                <li>Unity Game Design</li>
                <li>React js</li>
                <li>Database Design</li>
                <li>JavaFX</li>
              </ul>
            </div>
            <div className='resabdiv'>
              <a href='#resume' className='homegoabresume'>View My Resume</a>
              <a href='#contact' className='homegoabresume'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default About
