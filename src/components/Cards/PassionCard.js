import React from 'react'
import Fade from 'react-reveal/Fade';
import PassionBar from './PassionBar';
import './Cards.css'

export default function PassionCard(props) {
    return (
        <div className="card-wrapper-triple">


            <Fade left="true">
            <PassionBar img={""} title={"Name of person"} statement={"22 year old x from x exmaple"} cta={"View"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={""} title={"Name of person"} statement={"22 year old x from x exmaple"} cta={"View"}/>
            </Fade>
           


            <Fade left="true">
                <PassionBar img={""} title={"Name of person"} statement={"22 year old x from x exmaple"} cta={"View"}/>
            </Fade>
            



        </div>
    )
}
