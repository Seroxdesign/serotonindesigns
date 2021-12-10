import React, { Component } from 'react'
import FaqCardS from './FaqCardS'
import Header from 'components/Headers/Header'
import './FaqContainer.css'

export default class FaqContainer extends Component {
    constructor(){
        super()
        this.state = {
          
        }
    }

    render() {
        return (
            <div className="faq-container" style={{display: 'none'}}>
                <Header title={"My Frequently Asked Questions"} color={"white"}/>
                <div className="faqs">
                    <FaqCardS question={"Where are you from?"} answer={"I currently live in the UK, but I'm originally from Poland."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"Why do you have this accent?"} answer={"English is not my first language, so I probably picked it up from media. "} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"How old are you?"} answer={"I'm 22 years old."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What are your hobbies?"} answer={"I love gaming, currently obsessed with Valorant, I also love nintendo games, sewing and make up."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"Where do you get your outfits and wigs?"} answer={"Amazon(sellers like kryssma, littleforbig, olanstar), with some exceptions for wigs from stores: wigisfashion, apsanilfashion and a local wig store."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"How long have you been doing this?"} answer={"I used to do social media and things on the internet for a long time, but I've made it my full time job about 2 years ago, ever since lockdown started. "} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"Do you stream?"} answer={"I ocasionally stream on tiktok, I used to stream games on twitch but I rarely do that anymore. I'm hoping to go back soon. "} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"What colour is your real hair?"} answer={"My hair is purple now, but I dye it very often. Most of my pictures and videos online are of me wearing wigs."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"Do you have a youtube channel?"} answer={"I don't, but planning on starting one soon. I've been getting a lot of requests for a make up tutorial, but I'm mostly interested in making gaming content or vlogs."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                    <FaqCardS question={"Do you have pets?"} answer={"I have two cats, ash and peanut. I used to have rats, but they passed due to old age, one of them got rehomed after being the only one left."} img={"https://i.imgur.com/8fWIW63.png"} btn={"answer"} color={""}/>
                </div>

            </div>
        )
    }
}
