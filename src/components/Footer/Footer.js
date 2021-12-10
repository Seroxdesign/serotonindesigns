import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer-wrapper">

            <div className="support-me">
            <h2 className="support-header">Programming</h2>
                <p className="support-para">
                    If you need help starting out check the links down below.
                </p>
                
   
                <a className="support-me-link" href="https://www.theodinproject.com/" target="_blank">
                    <button className="support-me-btn">Free BootCamp</button>
                </a>

                <a className="support-me-link"  href="https://www.serotonindesigns.com/contact" target="_blank">
                    <button className="support-me-btn">Contact Developer</button>
                </a>
                <a className="support-me-link"  href="https://www.thehartford.com/business-insurance/strategy/building-website/10-reasons-need-website" target="_blank">
                    <button className="support-me-btn">Learn More</button>
                </a>
            </div>
           
            <div className="support-me">
                <h2 className="support-header">Support me</h2>
                <p className="support-para">
                    Creating websites and learning about technology is my passion help support me at: 
                </p>
                
   
                <a className="support-me-link" href="https://cash.app/$shCherx" target="_blank">
                    <button className="support-me-btn">Donate</button>
                </a>

                <a className="support-me-link"  href="https://www.patreon.com/serotoninexperience" target="_blank">
                    <button className="support-me-btn">Patreon</button>
                </a>
                <a className="support-me-link"  href="https://www.upwork.com/freelancers/~012c34c2572c7f7719" target="_blank">
                    <button className="support-me-btn">Hire me</button>
                </a>
          
             
            </div>
            
            <div className="site-map">
            <h2 className="support-header">Web Services</h2>
                <p className="support-para">
                    If you need support growing your business, or you'd like a website built for you you can check out my personal developer
                </p>
                
   
                <a className="support-me-link" href="https://www.serotonindesigns.com" target="_blank">
                    <button className="support-me-btn">View website</button>
                </a>

                <a className="support-me-link"  href="https://discord.com/invite/raEGkkQ7gf" target="_blank">
                    <button className="support-me-btn">Discord community</button>
                </a>
                <a className="support-me-link"  href="https://www.serotonindesigns.com/contact" target="_blank">
                    <button className="support-me-btn">Share your ideas</button>
                </a>
          
            </div>

            <div className="footer-privacy">
                <a className="privacy" href="" target="_blank">Privacy</a>
                <a className="privacy" href="" target="_blank">Tech Support</a>
                <a className="privacy" href="" target="_blank">Terms of Service</a>
            </div>
        </footer>
    )
}
