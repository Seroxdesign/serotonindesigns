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

    service_img_fans = ['https://i.imgur.com/b9tMY4n.png', 'https://i.imgur.com/rECPuqW.png', 'https://i.imgur.com/CdTrAJ3.png']
    service_img_creators = ['https://i.imgur.com/QFm22BX.png', 'https://i.imgur.com/1Th6vhz.png', 'https://i.imgur.com/jZUfwUf.png']

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

                <nav className="service-choice">
                    <h5 className="service-choice-title" id={this.state.display_for==='fans'? 'highlight' : ''} onClick={()=> {this.switch_display('fans', 'fans')}}>For Fans</h5>
                    <h5 className="service-choice-title" id={this.state.display_for==='creators'? 'highlight' : ''} onClick={()=> {this.switch_display('creators', 'creators')   }}>For Creators</h5>
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
                            {this.state.display_for==='fans' ? 'Gaming' : 'Advice'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service(1)
                    }} id={this.state.service===1? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Cameo' : 'Shout Outs'}
                        </li>

                        <li className="service-item" onClick={()=> {
                        this.switch_service(2)
                    }} id={this.state.service===2? 'highlight-service' : ''}>  
                            {this.state.display_for==='fans' ? 'Community' : 'Account management'}
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}
