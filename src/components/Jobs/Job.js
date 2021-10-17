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
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        )
    }
}
