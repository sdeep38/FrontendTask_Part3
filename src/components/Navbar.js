import React, { useEffect } from 'react'

export default function Navbar() {

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    const isSticky = () => {
        const header = document.querySelector(".navigation");
        const scrollTop = window.scrollY;
        scrollTop >= 0
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };

    return (
        <div className="navigation" id='myHeader'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark">

                            <a href="/" className="d-flex align-items-center logo"><img src="./images/cafeLogo.png"
                                alt="cafeLogo" /><span className="h3 text">Citi
                                    Cafe</span></a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#chefs">Chefs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#reservation">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link new" href="#special">Week Special</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
