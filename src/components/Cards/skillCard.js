import React from 'react'
import Header from 'components/Headers/Header';
import MiniCard from './MiniCard'
import Fade from 'react-reveal/Fade';

export default function SkillCard(props) {
    return (
    
            <div className="skill-wrapper">
                <Header title={props.title}  color={'rgba(255,255,255, 0.5)'}/>

                
                <div className="skill-grid">
                <Fade bottom="true">
                        <MiniCard title={props.title1} img={props.img1} link={props.link1} alt={""}/>

                        <MiniCard title={props.title2} img={props.img2} link={props.link2} alt={""}/>

                        <MiniCard title={props.title3} img={props.img3} link={props.link3} alt={""}/>
                            
                        <MiniCard title={props.title4} img={props.img4} link={props.link4}  alt={""}/>
                    
                        <MiniCard title={props.title5} img={props.img5} link={props.link5} alt={""}/>
                    
                        <MiniCard title={props.title6} img={props.img6} link={props.link6} alt={""}/>
                        </Fade>    
                </div>
              
                
                

            
            </div>

    )
}