import React, { Component } from 'react'
import JobLogoCard from './JobLogoCard'
import './Jobs.css'

export default class Job extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render(props) {
        return (
            <div className="job-wrapper">
                

                <div className="scroller">
                    <JobLogoCard title={"Amysky LTD"} img={"https://i.imgur.com/xIyggkg.png"} para={"2 years ago my partner and I started an entertainment business online, it's been pretty successful and it continues to grow every day."}/>
                    <JobLogoCard title={"Cannanodes"}  img={"https://i.imgur.com/m186TRU.png"} para={"A project intended to improve the life quality of medical Cannabis Patients in the UK, the project is still in progress"}/>
                    <JobLogoCard title={"Portfolio"}   img={"https://i.imgur.com/LyEk7u1.png"} para={"After self-studying web development for 2 years I decided it's time to try and break out into tech, which led me to creating my Portfolio"}/>
                </div>
            </div>
        )
    }
}
