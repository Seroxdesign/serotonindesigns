import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import IntroductionCard from 'components/Cards/IntroductionCard'

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
                        <Header  title={"Connect with me"} color={"#292828"}/>
                        <Job></Job>
                        
                    </div>

                    <div className="section-2">
                        <Header  title={"For creators"} color={"#292828"}/>
                        <Job></Job>
                        
                    </div>
                  
                    <div className="section-2" >
                        <Header title={"Recommended Creators"} color={"#292828"}/>
                        <PassionCard />
                    </div>

                    <div className="section-2">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
