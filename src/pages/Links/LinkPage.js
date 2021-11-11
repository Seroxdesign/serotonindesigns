import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import Linksec from 'components/Sections/Linksec'
import LinkCont from 'components/Sections/LinkCont'
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
            dropDown.style.height = '94vh'
            dropDown.style.backgroundColor = 'white'
        }

    }

    render() {
        return (
            <div className="page-wrapper">
                <NavbarS initial_tab={"links"} dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" id={"mobile-only"} ref={this.dropDown}>
                    <DropDown />
                </div>

                <div className="content-wrapper">
                    <div className="section-3">
                       <Linksec />
                    </div>

                    <div className="section-3">
                       <LinkCont />
                    </div>

                    <div className="section-3">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
