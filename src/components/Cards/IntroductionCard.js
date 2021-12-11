import React from 'react'
import MainHeader from 'components/Headers/MainHeader'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'
import CTAButton from 'components/Buttons/CTAButton' 
import Para from 'components/Paragraphs/Para'
import Skills from 'components/Data/Skills'

import './Cards.css'

export default function IntroductionCard() {
    return (
        <div className="card-wrapper">

            <div className="info">

                <Zoom>
                    <MainHeader title={"Design Made Simple"} />
                </Zoom>



                <Para text={"My name is Sherif and I am a Web Developer and Social media manager"}/>           

                <div className="ctas">
      

                <Link to={"/contact"}>
                <Zoom >
                    <CTAButton title={"Contact me"} type={"cta-btn-inv"}/>
                </Zoom>
                </Link>   

                </div>
                
                    


                <h6 className="mini-header-scroll">Scroll down for more.</h6>
            </div>
            

            <div className="skill-section"> 
                {Skills.map((skill, i) => {
                    return <img className="into-talent-img" src={skill} key={`skill-${i}`}></img>
                })}
            </div>
        </div>
    )
}
