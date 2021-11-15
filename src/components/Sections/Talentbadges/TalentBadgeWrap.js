import React, { Component } from 'react'
import TalentBadgeS from './TalentBadgeS'
import './TalentBadge.css'

export default class TalentBadgeWrap extends Component {
    render() {
        return (
            <div className="talent-collection-wrapper"> 
                <TalentBadgeS img={""} title={""} details={""}/>
                <TalentBadgeS img={""} title={""} details={""}/>
                <TalentBadgeS img={""} title={""} details={""}/>
                <TalentBadgeS img={""} title={""} details={""}/>
                <TalentBadgeS img={""} title={""} details={""}/>
            </div>
        )
    }
}
