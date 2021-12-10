import React, {Component} from 'react'
import SocialLink from 'components/SocialLink/SocialLink'
import './SocialLinks.css'

export default class SocialLinkContainerS extends Component {
    constructor(props){
        super(props);
        this.state = {
            Links: [''],
        }
    }

    componentDidMount = async () => {
            await this.setState({
                Links: this.props.Links,
            })

    }
    


    render() {
        
        return (
            <div className="social-link-container">
                    <div className="circular-img-link"></div>
                    <h2 className="link-header2">Serotonin Designs</h2>
                    <h2 className="link-header">Find me on:</h2>
                    
                    {this.state.Links.map((Link, i) => {
                        
                        return <SocialLink img={Link[0]} title={Link[2]} link={Link[1]} media={Link[3]} key={`social-link-${i}`}/>
                        
                    })}
            
        </div>
        )
    }
}
