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

            </div>

            <div className="info">
                <div className="intro-img"></div>

                <img src="https://i.imgur.com/cvYJjKN.jpg?1" className="intro-img"></img>

                <Zoom>
                    <MainHeader title={"Amy Sky"} />
                </Zoom>



                <Para text={"   My name is Amy, I'm a 22 year gamer and content creator from the UK."}/>           


                <Link to={"/Links"}>
                <Zoom >
                    <CTAButton title={"View my links"} type={"cta-btn"}/>
                </Zoom>
                </Link>   

                <Link to={"/contact"}>
                <Zoom >
                    <CTAButton title={"contact me"} type={"cta-btn"}/>
                </Zoom>
                </Link>   

                <Link to={"/"}>
                <Zoom>
                    <CTAButton title={"18+"} type={"cta-btn-inv"}/>
                </Zoom> 
                </Link>
                    


                <h6 className="mini-header-scroll">Scroll down for more.</h6>
            </div>
            
        </div>
    )
}
