import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import './ServiceReel.css'

export default class ServiceReel extends Component {

    constructor(){
        super();
        this.state = {
            display_for: 'fans',
            service: '1',
        }
    }

    switch_display = (x) => {
        this.setState({
            display_for: x,
        })
    }

    switch_service (x) {
        this.setState({
            service: x,
        })
    }

    render() {
        return (
            <div className="service-wrapper">

                <nav className="service-choice">
                    <h5 className="service-choice-title" id={this.state.display_for==='fans'? 'highlight' : ''} onClick={()=> {this.switch_display('fans')}}>For Fans</h5>
                    <h5 className="service-choice-title" id={this.state.display_for==='creators'? 'highlight' : ''} onClick={()=> {this.switch_display('creators')}}>For Creators</h5>
                </nav>
                <Fade left="true">
                    <main className="service-body">
                        <div className="service-img"></div>

                        <div className="service-cta">

                        </div>
                    </main>
                </Fade>   
              
                <footer className="service-index"> 
                    <ul className="service-index-list" > 
                        <li className="service-item" onClick={()=> {
                        this.switch_service('1')
                    }} id={this.state.service==='1'? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Gaming' : 'Advice'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service('2')
                    }} id={this.state.service==='2'? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Cameo' : 'Shout Outs'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service('3')
                    }} id={this.state.service==='3'? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Community' : 'Account management'}
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}
