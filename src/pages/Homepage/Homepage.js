import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import IntroductionCard from 'components/Cards/IntroductionCard'
import SkillCard from 'components/Cards/SkillCard'
import PassionCard from 'components/Cards/PassionCard'
import Header from 'components/Headers/Header'
import Job from 'components/Jobs/Job'
import BlogCard from 'components/Cards/BlogCard'
import Footer from 'components/Footer/Footer'
import DropDown from 'components/DropDownMenu/DropDown'

import('pages/PagesStyles.css')

export default class Homepage extends Component {

    constructor(){
        super()
        this.dropDown = React.createRef();
        this.state={
            nav_status: false,
        }
    }

    pull_out_dropdown = async () => {
        let dropDown= this.dropDown.current
        

        this.setState({
            nav_status: !this.state.nav_status
        })

        if(this.state.nav_status == true){
            dropDown.style.height = '0'
        }
        else{
            dropDown.style.height = '92vh'
            dropDown.style.backgroundColor = 'white'
        }

    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" ref={this.dropDown}>
                    <DropDown />
                </div>

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
                        <Header title={"My Blog"} color={"black"}/>
                        <BlogCard />
                    </div>

                    <div className="section-2"> 
                        <SkillCard img1={"https://i.imgur.com/RiLBaNc.png"} img2={"https://i.imgur.com/w05WNrp.png"} img3={"https://i.imgur.com/F97pQA0.png"} img4={"https://i.imgur.com/kaBe4fY.png"} img5={"https://i.imgur.com/D5UaqJo.png"} img6={"https://i.imgur.com/t6GJPzJ.png"} title={"Connect with me"}  color={"black"}  title1={"LinkedIn"} title2={"Youtube"} title3={"Instagram"}  title4={"Twitter"} title5={"Facebook"} title6={"TikTok"}/>
                    </div>

                    <div className="section-2">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
