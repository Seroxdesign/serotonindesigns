import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import IntroductionCard from 'components/Cards/IntroductionCard'
import SkillCard from 'components/Cards/SkillCard'
import PassionCard from 'components/Cards/PassionCard'
import Header from 'components/Headers/Header'
import Job from 'components/Jobs/Job'

import('pages/PagesStyles.css')

export default class Homepage extends Component {

    constructor(){
        super()
        this.state={
            
        }
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar />

                <div className="content-wrapper">
                    <div className="section-1">
                        <IntroductionCard />
                    </div>

                    <div className="section-2">
                        <SkillCard title={"My skills"} img1={"https://i.imgur.com/BAc1iep.png"} img2={"https://i.imgur.com/oqK7CnH.png"} img3={"https://i.imgur.com/JJLma0c.png"} img4={"https://i.imgur.com/PGjfwTi.png"} img5={"https://i.imgur.com/5W1adyZ.png"} img6={"https://i.imgur.com/BF6g2JC.png"} color={"black"} title1={"Web Development"} title2={"Responsive Design"} title3={"Marketing"}  title4={"Sales"} title5={"Bi-lingual"} title6={"Adobe Suite"} />
                    </div>

                    <div className="section-2" >
                        <Header title={"My passions"} color={"black"}/>
                        <PassionCard />
                    </div>

                    <div className="section-2">
                        <Header title={"My Work"} color={"black"}/>
                        <Job title={"Cannanodes"} text={"A directory to help medical patients to access safe and regulated medical products in the "}></Job>
                        
                    </div>

                    <div className="section-2"> 
                        <SkillCard img1={"https://i.imgur.com/RiLBaNc.png"} img2={"https://i.imgur.com/w05WNrp.png"} img3={"https://i.imgur.com/F97pQA0.png"} img4={"https://i.imgur.com/kaBe4fY.png"} img5={"https://i.imgur.com/D5UaqJo.png"} img6={"https://i.imgur.com/t6GJPzJ.png"} title={"Connect with me"}  color={"black"}  title1={"LinkedIn"} title2={"Youtube"} title3={"Instagram"}  title4={"Twitter"} title5={"Facebook"} title6={"TikTok"}/>
                    </div>
                </div>
            </div>
        )
    }
}
