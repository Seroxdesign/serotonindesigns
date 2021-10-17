import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <h3 className="site-foot-head">Thank you for making it till the end</h3>
                <button className="cta-end">
                    Let's talk
                </button>
            </div>

            <div className="footer-bottom">
                <div className="site-nav">
                    <h4 className="site-foot-header">Navigate</h4>
                    <div className="site-group">
                        <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/NQOaSCi.png" alt="home page icon"></img>
                                <h5 className="footer-head">Home</h5>
                            </div>
                        </Link>
                        
                        <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/lAVLGhE.png" alt="Blog page icon"></img>
                                <h5 className="footer-head">Blog</h5>
                            </div>
                        </Link>

                        <Link to={"/contact"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/tlBCkL3.png" alt="Contact page icon"></img>
                                <h5 className="footer-head">Contact</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="site-contact">
                    <h4 className="site-foot-header">Contact</h4>
                    <div className="site-group">
                        <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/tF3Cmdv.png" alt="home page icon"></img>
                                <h5 className="footer-head">LinkdIn</h5>
                            </div>
                        </Link>
                        
                        <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/mp7ihsw.png" alt="Blog page icon"></img>
                                <h5 className="footer-head">Call</h5>
                            </div>
                        </Link>

                        <Link to={"/contact"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/0yH5aFM.png" alt="Contact page icon"></img>
                                <h5 className="footer-head">Email</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="site-privacy">
                    <h4 className="site-foot-header">Privacy</h4>
                    <div className="site-group">
                    <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/siQWTYP.png" alt="home page icon"></img>
                                <h5 className="footer-head">Privacy</h5>
                            </div>
                        </Link>
                        
                        <Link to={"/"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/x10U87M.png" alt="Blog page icon"></img>
                                <h5 className="footer-head">Terms</h5>
                            </div>
                        </Link>

                        <Link to={"/contact"}>
                            <div className="btn-nav-foot">
                                <img className="footer-img" src="https://i.imgur.com/IzblncG.png" alt="Contact page icon"></img>
                                <h5 className="footer-head">Fair use</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
