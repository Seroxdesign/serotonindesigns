import React from 'react'
import MainHeader from 'components/Headers/MainHeader'
import Zoom from 'react-reveal/Zoom'

import './Cards.css'

export default function IntroductionCard() {
    return (
        <div className="card-wrapper">
            <img className="intro-img" src="https://i.imgur.com/Wa26fRG.jpg?1" alt="">

            </img>

            <Zoom>
                <MainHeader title={"Hello world, my name is Sherif, and I am a web developer"}/>
            </Zoom>
           

            <p className="intro-para">
            The first thing you need to know about me is I'm a lifelong learner. I am a web developer, social media manager and a traveler.
            I am especially interested in automating the boring things in life, to create more time for myself and the ones I love.
            </p>

            <div className="btn-container">
            <Zoom>
            <button className="intro-cta-btn">View my work</button>
            </Zoom>
                
            <Zoom>
            <button className="intro-cta-btn">Hire me</button>
            </Zoom>
                
            </div>
        </div>
    )
}
