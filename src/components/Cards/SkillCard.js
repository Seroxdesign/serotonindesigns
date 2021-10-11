import React from 'react'
import Header from 'components/Headers/Header'
import MiniCard from './MiniCard'
import Fade from 'react-reveal/Fade';

export default function SkillCard(props) {
    return (
        <div className="skill-wrapper">
            <Header title={props.title}  color={props.color}/>

            <div className="skill-grid">
                <Fade bottom="true">
                    <MiniCard title={props.title1} img={props.img1} alt={""}/>
                </Fade>

              <Fade bottom="true">
                 <MiniCard title={props.title2} img={props.img2} alt={""}/>
              </Fade>

              <Fade bottom="true">
                <MiniCard title={props.title3} img={props.img3} alt={""}/>
              </Fade>

              <Fade bottom="true">
                <MiniCard title={props.title4} img={props.img4} alt={""}/>
              </Fade>

              <Fade bottom="true">  
                  <MiniCard title={props.title5} img={props.img5} alt={""}/>
              </Fade>

              <Fade bottom="true">
                <MiniCard title={props.title6} img={props.img6} alt={""}/>
              </Fade>
              
               
              
               
            </div>
        </div>
    )
}
