import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function PassionCard(props) {
    return (
        <div className="card-wrapper-triple">


       

<Fade left="true">
            <PassionBar img={"https://i.imgur.com/mEHLMDx.png"} title={"Automation"} statement={"Time is priceless, let's save more of it"} cta={"Free consultation"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar link={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} img={"https://i.imgur.com/tcykbVw.png"} title={"Content creation"} statement={"Knowledge is strength, let's spread it."} cta={"Subscribe"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar link={"https://cash.app/$shCherx"} img={"https://i.imgur.com/FZuZNNZ.png"} title={"Sales"} statement={"We never lose, we either win or learn."} cta={"Support me"}/>
            </Fade>
            

        </div>
    )
}
