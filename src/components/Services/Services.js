import React, { Component } from 'react'
import Service from './Service'
import offered_services from 'components/Data/Service'
import './Services.css'

export default class Services extends Component {

    constructor(props){
        super(props) 
        this.state = {
            serve: '',
            service_array: [''],
        }
    }

    componentDidMount = async () => {
        if(this.props.service_for ==="My work"){
            await this.setState({
                serve: this.props.service_for,
                service_array: [offered_services[0], offered_services[1], offered_services[2]]
            })
        }
    }
    

   
    render() {
        return (
            <div className="services-container">

                <hr id={"desktop-only"}/>

                <h3 className="service-header-main">{this.props.service_for}</h3>
                
                <hr className="header-divider" id={"desktop-only"}/>

                <div className="services">
                    <div className="scroller">
                    {this.state.service_array.map((service, i) => {
                       return <Service img={service[0]} service_title={service[1]}  service_para={service[2]} action={service[3]} action_title={service[4]} key={`service-card-${i}`}/>
                   })}
                    </div>
                   
                </div>

            
            </div>
        )
    }
}
