import React, { Component } from 'react'
import JobLogoCard from './JobLogoCard'
import './Jobs.css'

export default class Job extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(props) {
        return (
            <div className="job-wrapper">
                

                <div className="scroller">
                    <JobLogoCard img={this.props.img1} link={this.props.link}/>
                    <JobLogoCard img={this.props.img2} link={this.props.link1}/>
                    <JobLogoCard img={this.props.img3} link={this.props.link2}/>
                </div>
            </div>
        )
    }
}
