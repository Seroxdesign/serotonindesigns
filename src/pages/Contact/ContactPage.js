import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import ContactForm from 'components/ContactForm/ContactForm'
import DropDown from 'components/DropDownMenu/DropDown'
import SkillCard from 'components/Cards/SkillCard'
import Footer from 'components/Footer/Footer'

export default class ContactPage extends Component {

    constructor(){
        super()
        this.dropDown = React.createRef();
        this.state={
            nav_status: false,
            message_bool: false,
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
    
    message_sent = () => {
        this.setState({
            message_bool: true,
        })
    }

    close_message = () => {
        this.setState({
            message_bool: false,
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" ref={this.dropDown}>
                    <DropDown />
                </div>


                <div className="content-wrapper" >
                  

                    <div className="section-2" style={{marginTop: '-0.5em'}}>
                        <a id="consultation"><ContactForm sent={this.message_sent} /></a>
                         
                    </div>

                    <div className="section-2">
                    <SkillCard link6={"https://www.tiktok.com/@sherifcherfa?lang=en"} link5={"https://www.facebook.com/profile.php?id=100060608779291"} link4={"https://twitter.com/MrSerotoninx"} link3={"https://www.instagram.com/serotonin_experience/"} link2={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} link1={"https://www.linkedin.com/in/sherif-sky-cherfa-346b85202/"} img1={"https://i.imgur.com/RiLBaNc.png"} img2={"https://i.imgur.com/w05WNrp.png"} img3={"https://i.imgur.com/F97pQA0.png"} img4={"https://i.imgur.com/kaBe4fY.png"} img5={"https://i.imgur.com/D5UaqJo.png"} img6={"https://i.imgur.com/t6GJPzJ.png"} title={"Connect with me"}  color={"black"}  title1={"LinkedIn"} title2={"Youtube"} title3={"Instagram"}  title4={"Twitter"} title5={"Facebook"} title6={"TikTok"}/>
                    </div>

                    <div className="section-2">
                         <Footer />
                    </div>
                </div>

                <div id={this.state.message_bool? 'message-sent' : 'invisible' }>
                    <button className="close-contact-btn" onClick={this.close_message}>X</button>

                    <h1 className="contact-header-announcement">Thank you for contacting me, I will try and get back to you as soon as possible</h1>
            
                    <img src="https://i.imgur.com/yQFkrr2.png" alt="" className="contact-status-img"></img>


                    <DropDown />
                </div>
            </div>
        )
    }
}

