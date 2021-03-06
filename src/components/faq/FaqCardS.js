import React, { Component } from 'react'

export default class FaqCardS extends Component {

    constructor(props){
        super(props)
        this.state = {
            q_bool: true,
            img:this.props.img,
            question: this.props.question,
            btn: this.props.btn,
            answer: this.props.answer,
        }
    }

    reverse_card = async () => {
        if(this.state.q_bool===true){
            await this.setState({
           
                q_bool: false,

            })
        }
        else{
            await this.setState({
                q_bool: true,

            })
        }

       
    }

    render() {
        return (

            <div className="faq">
           
                <div className="faq-wrapper" >  
                    <img className="faq-img" src='https://i.imgur.com/uXnAuud.png' alt=""></img>
                    <h3 className="faq-header">{this.state.question}</h3>
                </div> 
    
                <div className="faq-wrapper-r" >  
                    <img className="faq-img-r" src='https://i.imgur.com/tGVBFgZ.png' alt=""></img>
                    <h3 className="faq-header-r" >{this.state.answer}</h3>
                </div>
                
            </div>
       
        )
    }
}
