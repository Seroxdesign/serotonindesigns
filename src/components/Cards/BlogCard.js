import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function BlogCard(props) {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <PassionBar img={"https://i.imgur.com/7SUoyGh.png"} title={"Getting Started"} statement={"No investments, no barrier to entry. How I chose code."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={"https://i.imgur.com/E3NsL7R.png"} title={"Market Yourself"} statement={"Marketing is the ultimate tool, learn how to use it."} cta={"Read More"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={"https://i.imgur.com/TPJ8bwK.png"} title={"Digital World."} statement={"How to protect yourself from burnout and loss of motivation."} cta={"Read More"}/>
            </Fade>
            
        
        </div>
    )
}
