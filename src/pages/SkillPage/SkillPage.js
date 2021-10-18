import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar';
import DropDown from 'components/DropDownMenu/DropDown';
import Footer from 'components/Footer/Footer'
import SkillDisplay from './SkillDisplay';

import('pages/PagesStyles.css')

export default class SkillPage extends Component {

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
                        <SkillDisplay />
                    </div>

                    <div className="section-2">

                    </div>

                    <div className="section-2">

                    </div>  
                </div>
            </div>
        )
    }
}
