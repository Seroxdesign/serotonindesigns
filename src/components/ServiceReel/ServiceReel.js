import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import './ServiceReel.css'




export default class ServiceReel extends Component {

    constructor(){
        super();
        this.state = {
            display_for: 'fans',
            service: 0,
            service_set: this.service_img_fans,
        }
    }

    service_img_fans = []
    service_img_creators = []

    switch_display = async (audience, img_set) => {
        let display_imgs = []

        if(img_set === 'fans'){
            display_imgs = this.service_img_fans
        }
        else{
            display_imgs = this.service_img_creators
        }
        
        await this.setState({
            display_for: audience,
            service_set: display_imgs,
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

                <nav className="service-choice" >
                    <h5 className="service-choice-title" id={this.state.display_for==='fans'? '' : ''} >MY WORK</h5>
                </nav>
                <Fade left="true">
                    <main className="service-body">
                        <div className="service-img" ></div>

                        <div className="service-cta" style={{backgroundImage: `url("${this.state.service_set[this.state.service]}")`}}>

                        </div>
                    </main>
                </Fade>   
              
                <footer className="service-index"> 
                    <ul className="service-index-list" > 
                        <li className="service-item" onClick={()=> {
                        this.switch_service(0)
                    }} id={this.state.service===0? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'AMYSKY LTD' : 'Advice'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service(1)
                    }} id={this.state.service===1? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Freelance Developer' : 'Shout Outs'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service(2)
                    }} id={this.state.service===2? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Social Media Management' : 'Account management'}
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}
