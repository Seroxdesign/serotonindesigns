import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import IntroductionCard from 'components/Cards/IntroductionCard'
import SkillCard from 'components/Cards/skillCard'
import PassionCard from 'components/Cards/PassionCard'
import Job from 'components/Jobs/Job'
import Footer from 'components/Footer/Footer'
import DropDown from 'components/DropDownMenu/DropDown'
import Header from 'components/Headers/Header'


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
            dropDown.style.height = '94vh'
            dropDown.style.backgroundColor = 'white'
        }

    }

    render() {
        return (
            <div className="page-wrapper">
                <NavbarS initial_tab={"home"} dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" id={"mobile-only"} ref={this.dropDown}>
                    <DropDown />
                </div>

                <div className="content-wrapper">
                    <div className="section-1">
                        <IntroductionCard />
                    </div>

                

                    <div className="section-3">
                        <SkillCard title={"My skills"}  img1={"https://i.imgur.com/BAc1iep.png"} img2={"https://i.imgur.com/oqK7CnH.png"} img3={"https://i.imgur.com/JJLma0c.png"} img4={"https://i.imgur.com/PGjfwTi.png"} img5={"https://i.imgur.com/5W1adyZ.png"} img6={"https://i.imgur.com/BF6g2JC.png"} color={"black"} title1={"Web Development"} title2={"Responsive Design"} title3={"Marketing"}  title4={"Sales"} title5={"Bi-lingual"} title6={"Adobe Suite"} />
                    </div>


                    <div className="section-3" >
                        <Header title={"My passions"} color={"rgba(255,255,255,0.7)"}/>
                        <PassionCard />
                    </div>

                    <div className="section-3" >
                        <Header  title={"My work"} color={"rgba(255,255,255,0.7)"}/>
                        <Job img1={"https://i.imgur.com/N6VVZM5.png"} img2={"https://i.imgur.com/OZ9Si2i.png"} img3={"https://i.imgur.com/rT4gO4S.png"}></Job>
                        
                    </div>

                  

                    <div className="section-3">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
