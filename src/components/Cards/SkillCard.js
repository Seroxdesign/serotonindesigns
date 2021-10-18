import React from 'react'
import Header from 'components/Headers/Header'
import MiniCard from './MiniCard'
import Fade from 'react-reveal/Fade';

export default function SkillCard(props) {
    return (
        <div className="skill-wrapper">
            <Header title={props.title}  color={props.color}/>

            <Fade bottom="true">
            <div className="skill-grid">
                <MiniCard title={props.title1} img={props.img1} alt={""}/>

                <MiniCard title={props.title2} img={props.img2} alt={""}/>

                <MiniCard title={props.title3} img={props.img3} alt={""}/>
                      
                <MiniCard title={props.title4} img={props.img4} alt={""}/>
              
                <MiniCard title={props.title5} img={props.img5} alt={""}/>
              
                <MiniCard title={props.title6} img={props.img6} alt={""}/>
            </div>
            </Fade>

        
        </div>
    )
}
