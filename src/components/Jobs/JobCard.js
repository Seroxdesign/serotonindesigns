import React from 'react'
import { Link } from 'react-router-dom'
import './Jobs.css'

export default function JobCard(props) {
    return (
        <div className="job-card-wrapper">

            <div className="top-card">
                <h3 className="top-header-title">{props.title}</h3>

                <p className="top-c-para"> 
                    {props.para}
                </p>

                <div className="skill-compilation">
                    <div className="skill">
                        <img className="skill-img-work" src={props.skill1}></img>
                        
                        <h5 className="skill-t-t">
                            {props.skillt1}
                        </h5>
                    </div>

                    <div className="skill">
                        <img className="skill-img-work" src={props.skill2}></img>
                        
                        <h5 className="skill-t-t">
                            {props.skillt2}
                        </h5>
                    </div>

                    <div className="skill">
                        <img className="skill-img-work" src={props.skill3}></img>
                        
                        <h5 className="skill-t-t">
                            {props.skillt3}
                        </h5>
                    </div>

                    <div className="skill" >
                        <img className="skill-img-work" src={props.skill4}></img>
                        
                        <h5 className="skill-t-t">
                            {props.skillt4}
                        </h5>
                    </div>
                </div>
            </div>
           


       
                <div className="bottom-card">
                    <button className="btn-job">Contact me</button>
                </div>
            
        </div>
    )
}
