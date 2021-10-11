import React, { Component } from 'react'

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
                <div className="job-title">
                    <h2 className="project-title">{this.props.title}</h2>
                    <img className="" src={this.props.img} alt={this.props.alt}></img>
                </div>

                <div className="job-para">
                    {this.props.text}
                </div>

                <div className="job-display">
                    <div className="job-screens">
                        <div className="laptop-display">
                            <img className="laptop-sc" src="" alt=""></img>
                        </div>
                        <div className="phone-display">
                            <img className="phone-sc" src="" alt=""></img>
                        </div>
                    </div>

                    <div className="job-display-index">
                        <button className="">back</button>
                        <ul className=""> </ul>
                        <button className="">next</button>
                    </div>
                </div>
            </div>
        )
    }
}
