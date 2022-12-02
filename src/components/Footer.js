import React from 'react'

export default function Footer() {

    const FooterStyles = {
        color : '#f68000',
        textTransform : 'uppercase'
    };

    return (
        <footer>
            <div className = "container">
                <div className = "row align-items-center">
                    <div className = "col-lg-4 col-xs-12">
                        <div className = "left-content">

                            <div className = "flogo">
                                <a href="/"><img src="./images/cafeLogo.png" alt="cafeLogo" /><span
                                    className = "h3 text mt-3">Citi
                                    Cafe</span></a>

                            </div>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-xs-12">
                        <div className = "center-content">
                            <h6>©️ Copyright 2022 Citi Cafe Co. All rights reserved</h6>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-xs-12">
                        <div className = "right-content">

                            <ul className = "social-media">
                                <li className = "icon">
                                    <a href="/">
                                        <span className = "fa-brands fa-facebook"></span>
                                    </a>
                                </li>
                                <li className = "icon">
                                    <a href="/">
                                        <span className = "fa-brands fa-instagram"></span>
                                    </a>
                                </li>
                                <li className = "icon">
                                    <a href="/">
                                        <span className = "fa-brands fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className = "icon">
                                    <a href="/">
                                        <span className = "fa-brands fa-twitter"></span>
                                    </a>
                                </li>

                                <li className = "icon">
                                    <a href="/">
                                        <span className = "fa-brands fa-youtube"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "bottom-content">
                    <span className = "site-design">Designed and developed by : <span
                        style={FooterStyles}>Soumyadeep Saha</span></span>
                    <ul className = "dummy-links">
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
