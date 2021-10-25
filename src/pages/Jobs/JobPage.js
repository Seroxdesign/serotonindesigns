import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import DropDown from 'components/DropDownMenu/DropDown'
import Footer from 'components/Footer/Footer'
import JobIntroCard from 'components/Cards/JobIntroCard'
import MethodCard from 'components/Cards/MethodCard'
import Header from 'components/Headers/Header'
import LimitCard from 'components/Cards/LimitCard'
import Job from 'components/Jobs/Job'

export default class JobPage extends Component {

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


                <div className="content-wrapper" >
                    <div className="section-1">
                        <JobIntroCard title={"Amysky LTD"} img={"https://i.imgur.com/xIyggkg.png"} para={"2 years ago my partner and I started an entertainment business online, it's been pretty successful and it continues to grow every day."}/>
                    </div>

                    <div className="section-2">
                    <Header title={"Our Methods"} color={"black"}/>
                    <MethodCard />
                    </div>

                    <div className="section-2">
                    <LimitCard />
                    </div>

                    <div className="section-2">
                    <Header title={"Our Projects"} color={"black"}/>
                    <Job />
                    </div>

                    <div className="section-2">
                        
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}

