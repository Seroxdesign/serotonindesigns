import React from 'react'
import './Footer.css'
import MailingList from 'components/MailingList/MailingList'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <MailingList />
               
            </div>

         

            <div className="footer-bottom">
                <h4 className="foot-head">Navigate</h4>
               <div className="foot-row" style={{borderBottom: '2px solid white'}}>
                    <a className="footer-link">Home</a>
                    <a className="footer-link">Links</a>
                    <a className="footer-link">Contact</a>
               </div>
              
               <div className="foot-row">
                    <a className="footer-link">Privacy</a>
                    <a className="footer-link">Privacy</a>
                    <a className="footer-link">Privacy</a>
               </div>
              
             
            </div>
        </div>
    )
}
