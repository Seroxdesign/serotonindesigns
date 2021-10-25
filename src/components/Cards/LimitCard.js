import React from 'react'
import Header from 'components/Headers/Header'

export default function LimitCard() {
    return (
        <div className="job-card-intro-wrapper">
             <div className="job-top">
                <Header title={"The Truth"} color={"#1efeff"}/>

                <p className="work-para">
                The truth is that financial freedom is the result of years of hard, consistent, and repetitive work.
                <br/>
                <br/>
                To generate truly passive income, you must first generate active income and then build scalable and automated systems.
                <br/>
                <br/>
                We will share our blueprint with you, as well as provide consultation and web development services to assist your business in reaching new heights.
                </p>
            
            
            </div>

            <div className="job-bottom" style={{backgroundImage: 'url("https://i.imgur.com/L77xf9k.png")'}}>
               
            </div>
        </div>
    )
}
