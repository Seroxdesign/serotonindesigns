import React, { Component } from 'react'

import './TalentBadge.css'

export default class TalentBadgeS extends Component {
    render(props) {
        return (
            <div className="talent-badge">
                <img className="" src={this.props.img} alt={this.props.title}></img>
                <h4 className="">{this.props.title}</h4>

                <div className="">
                    <p className="">
                        {this.props.details}
                    </p>
                </div>
            </div>
        )
    }
}
