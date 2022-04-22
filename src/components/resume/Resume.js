import React,{useState} from 'react';
import './resume.css';
import coding from '../icons/coding.png';
import flow from '../icons/flowchart.png';
import his from '../icons/history.png';
import mort from '../icons/mortarboard.png';

const Education = () =>{
    return(
        <div>
            <ul className='educationul'>
                <li className='educationli'>Adama Science and Technology University 2019 - Current</li>
                <li className='educationli'>Lideta Catholic Cathedral School (LCCS) 2016-2018</li>
                <li className='educationli'>Eb-Academy 2007-2015</li>
            </ul>
        </div>
    )
}

const WorkHistory = () =>{
    return(
        <div>
            <ul className='educationul'>
                <li className='educationli'>Haben Software Design and Development </li>
            </ul>
        </div>
    )
}

const ProgrammingSkills = () =>{
    return(
        <div>
            <ul className='educationul'>
                <li className='educationli'>Web Development</li>
                <li className='educationli'>Unity Game Development</li>
                <li className='educationli'>React Js</li>
                <li className='educationli'>Database Design</li>
                <li className='educationli'>JavaFx</li>
            </ul>
        </div>
    )
}

const Projects = () =>{
    return(
        <div>
            <ul className='educationul'>
                <li className='educationli'>Cinema Schedule with Java Swing</li>
                <li className='educationli'>Roll Racer Game with Unity</li>
                <li className='educationli'>Food order(Web Based)</li>
                <li className='educationli'>Event and Tour Organizing Platform(On going Project )</li>
            </ul>
            <a href='#projects' className='prolinkage'>Project details</a>
        </div>
    )
}
const Resume = () => {
    const[ischoose,setischoose]=useState(1);
    const[isedu,setedu]=useState(true);
    const[iswo,setwo]=useState(false);
    const[ispro,setpro]=useState(false);
    const[isproj,setproj]=useState(false);
  
    
  return (
    <div className='top-resume-main' id='resume'>
        <h3>Resume</h3>
        <div className='resume-about'>
            <div className='lists'>
                <div className='defineicons'>
                    <img src={mort} alt='' className='resumeicons'></img>
                    <img src={his} alt=''className='resumeicons'></img>
                    <img src={coding} alt='' className='resumeicons'></img>
                    <img src={flow} alt='' className='resumeicons'></img>
                </div>
                <div>
                    <ul className='resumeul'>
                        <li className={isedu? "eduresumeli" : "resumeli"} onClick={()=>{setischoose(1);setedu(true);setwo(false);setpro(false);setproj(false)}}> Education</li>
                        <li className={iswo? "eduresumeli" : "resumeli"} onClick={()=>{setischoose(2);setedu(false);setwo(true);setpro(false);setproj(false)}}>Work History</li>
                        <li className={ispro? "eduresumeli" : "resumeli"} onClick={()=>{setischoose(3);setedu(false);setwo(false);setpro(true);setproj(false)}}>Programming Skills</li>
                        <li className={isproj? "eduresumeli" : "resumeli"} onClick={()=>{setischoose(4);setedu(false);setwo(false);setpro(false);setproj(true)}}>Projects</li>
                    </ul>
                </div>  
            </div>
            <div className='vl'></div>
            <div className='hl'></div>
            <div className='detail'>
                {(()=>{
                    if(ischoose===1){
                        return(
                            <Education/>
                        )
                    }
                    else if(ischoose===2){
                        return(
                            <WorkHistory/>
                        )
                    }
                    else if(ischoose===3){
                        return(
                            <ProgrammingSkills/>
                        )
                    }
                    else if(ischoose===4){
                        return(
                            <Projects/>
                        )
                    }
                })()}
            </div>
        </div>
    </div>
  )
}

export default Resume
