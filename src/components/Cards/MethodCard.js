import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function MethodCard(props) {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <PassionBar link={"https://www.huffpost.com/entry/8-tips-to-help-grow-your-_b_7562332"} img={"https://i.imgur.com/1XSTSdH.png"} title={"Growing Networks"} statement={"No investments, no barrier to entry. All you need is you."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar link={"https://marketinginsidergroup.com/strategy/what-is-marketing/"} img={"https://i.imgur.com/E3NsL7R.png"} title={"Marketing"} statement={"Understand your network, solve their problems. Create strong relationships."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar link={"https://www.ibm.com/topics/automation"} img={"https://i.imgur.com/TPJ8bwK.png"} title={"Automation"} statement={"Create a defined system, digitize, then automate. "} cta={"Read More"}/>
            </Fade>
            
        
        </div>
    )
}
