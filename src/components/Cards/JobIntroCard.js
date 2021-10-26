import React from 'react'
import Header from 'components/Headers/Header'
import './Cards.css'

export default function JobIntroCard(props) {
    return (
        <div className="job-card-intro-wrapper">
             <div className="job-top">
                <Header title={"Our work"} color={"#1efeff"}/>

                <p className="work-para">
                    If you've been developing your business, you know that it's an endless task.
                    <br></br>
                    <br></br>
                    Our time here is limited, and our time is valuable, which is why we believe in working smart rather than hard.
                    <br></br>
                    <br></br>
                    We aspire to design solutions that automate the processes that keep your business functioning, to create more time for the things that really matter.
                </p>

                <img className="job-intro-im" src="https://i.imgur.com/c2m9UhK.png" alt="" id={"desktop-only"}></img>
            </div>

            <div className="job-bottom">
                
            </div>

           
         </div>
    )
}
