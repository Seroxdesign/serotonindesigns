import React from 'react'
import MainHeader from 'components/Headers/MainHeader'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'

import './Cards.css'

export default function IntroductionCard() {
    return (
        <div className="card-wrapper">
            <img className="intro-img" src="https://i.imgur.com/Wa26fRG.jpg?1" alt="">

            </img>

            <img src="https://i.imgur.com/s4vWOtX.jpg?1" className="intro-img-dt"></img>

            <Zoom>
                <MainHeader title={"Hi, my name is Sherif, and I'm a web developer."} />
            </Zoom>
           

            <p className="intro-para">
            The first thing you need to know about me is I'm a lifelong learner. I am a web developer, social media manager and a traveler.
            I am especially interested in automating the boring things in life, to create more time for myself and the ones I love.
            </p>

            <div className="btn-container">
            <Link to={"/work"}>
            <Zoom >
            <button className="intro-cta-btn" >View my work</button>
            </Zoom>
            </Link>   

            <Link to={"/contact"}>
            <Zoom>
                <button className="intro-cta-btn" id={"mobile-only"}>Hire me</button>
            </Zoom>
            </Link>
                
            </div>
        </div>
    )
}
