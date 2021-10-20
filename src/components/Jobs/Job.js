import React, { Component } from 'react'

import JobCard from './JobCard'

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
                    <JobCard skill1={"https://i.imgur.com/vH6dBKz.png"} skillt1={"Media management"} skill2={"https://i.imgur.com/hn8WUCo.png"} skillt2={"Time Management"} skill4={"https://i.imgur.com/JJLma0c.png"} skill3={"https://i.imgur.com/PGjfwTi.png"} skillt3={"Sales"} skillt4={"Marketing"} title={"AMYSKY LTD"} para={"2 years ago my partner and I started an entertainment business online, it's been pretty successful and it continues to grow every day."}/>
                    <JobCard skill1={"https://i.imgur.com/vH6dBKz.png"} skillt1={"Media management"} skill2={"https://i.imgur.com/hn8WUCo.png"} skillt2={"Time Management"} skill4={"https://i.imgur.com/oqK7CnH.png"} skill3={"https://i.imgur.com/BAc1iep.png"} skillt3={"Web Dev"} skillt4={"Responsive design"} title={"Cannanodes"} para={"A project intended to improve the life quality of medical Cannabis Patients in the UK, the project is still in progress"} />
                    <JobCard skill1={"https://i.imgur.com/vH6dBKz.png"} skillt1={"Media management"} skill2={"https://i.imgur.com/hn8WUCo.png"} skillt2={"Time Management"} skill4={"https://i.imgur.com/oqK7CnH.png"} skill3={"https://i.imgur.com/BAc1iep.png"} skillt3={"Web Dev"} skillt4={"Responsive design"} title={"Portfolio"} para={"After self-studying web development for 2 years I decided it's time to try and break out into tech, which led me to creating my Portfolio"} />
                </div>
            </div>
        )
    }
}
