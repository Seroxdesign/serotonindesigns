import React, { Component } from 'react'
import JobLogoCard from './JobLogoCard'
import Header from 'components/Headers/Header'
import './Jobs.css'

export default class Job extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="job-wrapper">
                

                <div className="scroller">
                    <JobLogoCard />
                    <JobLogoCard/>
                    <JobLogoCard/>
                </div>
            </div>
        )
    }
}
