import React from 'react'
import MainHeader from 'components/Headers/MainHeader'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'

import './Cards.css'

export default function IntroductionCard() {
    return (
        <div className="card-wrapper">
            <div className="intro-img"></div>

            <img src="https://i.imgur.com/s4vWOtX.jpg?1" className="intro-img-dt"></img>

            <Zoom>
                <MainHeader title={"Amy Sky"} />
               
            </Zoom>
           

            <p className="intro-para">
                My name is Amy, I'm a 22 year gamer and content creator from the UK.
                <br/>
                 I work in social media management and I've been doing this for the last two years.
            </p>

           

            <div className="btn-container">
            <Link to={"/work"}>
            <Zoom >
            <button className="intro-cta-btn" >View my work</button>
            </Zoom>
            </Link>   

            <Link to={"/contact"}>
            <Zoom>
                <button className="intro-cta-btn inv" id={"mobile-only"}>Hire me</button>
            </Zoom>
            </Link>
                
            </div>

            <h6 className="a-h">Scroll down to read more about me and what I do.</h6>
        </div>
    )
}
