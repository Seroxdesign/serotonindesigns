import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import IntroductionCard from 'components/Cards/IntroductionCard'

import PassionCard from 'components/Cards/PassionCard'
import Job from 'components/Jobs/Job'
import Footer from 'components/Footer/Footer'
import DropDown from 'components/DropDownMenu/DropDown'
import Header from 'components/Headers/Header'
import ServiceReel from 'components/ServiceReel/ServiceReel'

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

                    <div className="section-2" id={"mobile-only"}>
                        <Header  title={"Connect with me"} color={"rgba(255,255,255,0.7)"}/>
                        <Job img1={"https://i.imgur.com/b9tMY4n.png"} img2={"https://i.imgur.com/rECPuqW.png"} img3={"https://i.imgur.com/CdTrAJ3.png"}></Job>
                        
                    </div>

                    <div className="section-2" id={"mobile-only"}>
                        <Header  title={"For creators"} color={"rgba(255,255,255,0.7)"}/>
                        <Job img1={"https://i.imgur.com/QFm22BX.png"} img2={"https://i.imgur.com/1Th6vhz.png"} img3={"https://i.imgur.com/jZUfwUf.png"}></Job>
                        
                    </div>

                    <div className="section-2" id={"desktop-only"}>
                        <ServiceReel />
                    </div>
                  
                    <div className="section-3" >
                        <Header title={"Recommended Creators"} color={"rgba(255,255,255,0.7)"}/>
                        <PassionCard />
                    </div>

                    <div className="section-3">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
