import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function MethodCard(props) {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <PassionBar img={"https://i.imgur.com/1XSTSdH.png"} title={"Grow a Network"} statement={"No investments, no barrier to entry. All you need is you."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={"https://i.imgur.com/E3NsL7R.png"} title={"Market Yourself"} statement={"Understand your network, solve their problems. Create strong relationships."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={"https://i.imgur.com/TPJ8bwK.png"} title={"Automate"} statement={"Create a defined system, digitize, then automate. "} cta={"Read More"}/>
            </Fade>
            
        
        </div>
    )
}
