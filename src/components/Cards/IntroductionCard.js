import React from 'react'
import MainHeader from 'components/Headers/MainHeader'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'
import CTAButton from 'components/Buttons/CTAButton' 
import Para from 'components/Paragraphs/Para'

import './Cards.css'

export default function IntroductionCard() {
    return (
        <div className="card-wrapper">

            <div className="pic">
                <h6 className="shout-out" id={"desktop-only"}> 
                SRImages by mediumsizedports on instagram
                </h6>
                
            </div>

            <div className="info">
                <div className="intro-img"></div>

                <img src="https://i.imgur.com/Wa26fRG.jpg?1" id={"mobile-only"} className="intro-img"></img>

                <Zoom>
                    <MainHeader title={"Sherif Cherfa, Web Developer"} />
                </Zoom>



                <Para text={"I believe in creating more time for the people around me using web development, automation and marketing."}/>           


                <Link to={"/Links"}>
                <Zoom >
                    <CTAButton title={"View my links"} type={"cta-btn"}/>
                </Zoom>
                </Link>   

                <Link to={"/contact"}>
                <Zoom >
                    <CTAButton title={"contact me"} type={"cta-btn-inv"}/>
                </Zoom>
                </Link>   

                    


                <h6 className="mini-header-scroll">Scroll down for more.</h6>
            </div>
            
        </div>
    )
}
