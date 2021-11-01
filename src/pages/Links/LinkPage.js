import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import SocialLink from 'components/SocialLink/SocialLink'
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
                        <img className="circular-img-link" src="https://i.imgur.com/Z76JJnp.jpg" alt=""></img>
                        <h2 className="link-header2">AMYSKY</h2>
                        <h2 className="link-header">Find me on:</h2>

                        <div className="links-scroller">
                            <SocialLink img={"https://i.imgur.com/cbHzfgE.png"} link={""} media={"insta"} title={"@Amysky99x"}/>
                            <SocialLink />
                            <SocialLink />
                        </div>
                    </div>

                    <div className="">
                    
                    </div>

                    <div className="section-2">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
