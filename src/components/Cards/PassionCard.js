import React from 'react'
import Fade from 'react-reveal/Fade';
import './Cards.css'

export default function PassionCard() {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <div className="passion-section">
                <img src="https://i.imgur.com/mEHLMDx.png" className="passion-img" alt="" ></img>

                <div className="passion-collection">
                    <h3 className="passion-header">Automation</h3>
                    <p className="passion-para">Time is priceless, let's make more of it.</p>
                    <button className="passion-cta">Free consultation</button>
                </div>
            </div>
            </Fade>
           


            <Fade left="true">
                <div className="passion-section">
                    <img src="https://i.imgur.com/tcykbVw.png" alt="" className="passion-img"></img>

                    <div className="passion-collection">
                        <h3 className="passion-header">Content creation</h3>
                        <p className="passion-para">Knowledge is strength, let's spread it.</p>
                        <button className="passion-cta">Subscribe</button>
                    </div>
                </div>
            </Fade>
           


            <Fade left="true">
            <div className="passion-section">
                <img src="https://i.imgur.com/FZuZNNZ.png" alt="" className="passion-img"></img>

                <div className="passion-collection">
                    <h3 className="passion-header">Sales</h3>
                    <p className="passion-para">We never lose, we either win or learn.</p>
                    <button className="passion-cta">Sponsor me</button>
                </div>
            </div>
            </Fade>
            



        </div>
    )
}
