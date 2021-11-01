import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function PassionCard(props) {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <PassionBar />
            </Fade>
           


            <Fade left="true">
                <PassionBar />
            </Fade>
           


            <Fade left="true">
                <PassionBar />
            </Fade>
            



        </div>
    )
}
