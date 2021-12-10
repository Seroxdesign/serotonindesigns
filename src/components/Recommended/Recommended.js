import React from 'react'
import RecommendedCard from './RecommendedCard'
import recommended from 'components/Data/RecommnededCreators'

import './Recommended.css'


export default function Recommended() {
    return (
        <div className="recommended-container"> 
            

            {recommended.map((person, i) => {
                return <RecommendedCard img={person[0]} title={person[1]}  link1={person[2]}  img1={person[3]}  key={`recommended-creator-${i}`}/>
            })}
        </div>
    )
}
