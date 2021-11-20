import React, { Component } from 'react'
import FaqCardS from './FaqCardS'
import './FaqContainer.css'

export default class FaqContainer extends Component {
    constructor(){
        super()
        this.state = {
          
        }
    }

    render() {
        return (
            <div className="faq-container">
                
                <div className="faqs">
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What's the best place to talk to you?"} answer={"You can find me on my apps"} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                </div>

                <div className="contact-cta">
                     
                </div>
            </div>
        )
    }
}
