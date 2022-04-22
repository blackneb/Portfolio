import React, {useState} from 'react'
import './projects.css'
import SimpleImageSlider from 'react-simple-image-slider'
import pp from '../photos/profile2.PNG'


const Slider = (props) =>{
    return(
        <div className='slider'>
          <h3>{props.projectname}</h3>
          <div className='slidercomp'>
            <SimpleImageSlider
                  width={400}
                  height={300}
                  images={props.images}
                  showBullets={true}
                  showNavs={true}
              />
          </div>
          <div className='slidercompmobile'>
            <SimpleImageSlider
                  width={200}
                  height={150}
                  images={props.images}
                  showBullets={true}
                  showNavs={true}
              />
          </div>
          <div className='detailsize'>
          <p>{props.info}</p>
          </div>
        </div>
    )
}


const Projects = () => {

    const[ischoose,setischoose]=useState(1);
    const[isproone,setproone]=useState(true);
    const[isprotwo,setprotwo]=useState(false);
    const[isprothree,setprothree]=useState(false);

    const projectone=[
      {
        project_name:"Rush Ball",
        project_info:"Running game built using Unity game engine",
        project_link:"",
        images:[
          {
            url:{pp}
          },
          {
            url:{pp}
          }
        ]
    }
    ]

    const projecttwo=[
      {
        project_name:"Cinema Schedule",
        project_info:"Simple Admin panel for Cinema admins and booking system for users",
        project_link:"",
        images:[
          {
            url:{pp}
          },
          {
            url:{pp}
          }
        ]

    },
    ]

    const projectthree=[
      {
            project_name:"Food Order",
            project_info:"Dynamic website for food ordering system built using PHP, HTML, CSS and Javascript",
            project_link:"",
            images:[
              {
                url:{pp}
              },
              {
                url:{pp}
              }
            ]

        }
    ]

  return (
    <div className='main-project' id='projects'>
      <h3 className='proname'>Projects</h3>
      <div className='main-project-box'>
            <ul className='prosul'>
                <li className={isproone? "proslic" : "prosli"} onClick={()=>{setischoose(1);setproone(true);setprotwo(false);setprothree(false)}}>Roll Racer Game with Unity</li>
                <li className={isprotwo? "proslic" : "prosli"} onClick={()=>{setischoose(2);setproone(false);setprotwo(true);setprothree(false)}}>Cinema Schedule with Java Swing</li>
                <li className={isprothree? "proslic" : "prosli"} onClick={()=>{setischoose(3);setproone(false);setprotwo(false);setprothree(true)}}>Food order(Web Based)</li>
            </ul>
            {(()=>{
                    if(ischoose===1){
                        return(
                            <div>
                              {projectone.map((e)=><Slider projectname={e.project_name} info={e.project_info} link={e.project_link} images={e.images} />)}
                            </div>
                        )
                    }
                    else if(ischoose===2){
                        return(
                          <div>
                              {projecttwo.map((e)=><Slider projectname={e.project_name} info={e.project_info} link={e.project_link} images={e.images} />)}
                        </div>
                        )
                    }
                    else if(ischoose===3){
                        return(
                          <div>
                              {projectthree.map((e)=><Slider projectname={e.project_name} info={e.project_info} link={e.project_link} images={e.images} />)}
                        </div>
                        )
                    }
                })()}
      </div>
    </div>
  )
}

export default Projects
