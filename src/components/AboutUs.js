import React from 'react'

export default function AboutUs() {
  return (
    <section className = "section" id="about">
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-6 col-md-6 col-xs-12">
                    <div className = "section-text-left">
                        <div className = "heading">
                            <h6 className = "my-0">About Us</h6>
                            <h2>A few words about our cafe</h2>
                        </div>
                        <div className = "info mb-5">
                            <p>Citi Cafe is one of the best <a href="/">restaurant HTML templates</a> with Bootstrap
                                v4.5.2 CSS
                                framework. You can download and feel free to use this website template layout for your
                                restaurant business. You are allowed to use this template for commercial purposes.</p>
                            <p>You are NOT allowed to redistribute the template ZIP file on any template donwnload
                                website. Please contact us for more information.
                            </p>
                            <a href="/" className = "more">More About Us</a>
                        </div>
                        <div className = "bottom-img">
                            <div className = "row">
                                <div className = "col-lg-4 col-md-4">
                                    <img src="./images/dish1.jpg" alt="" className = "dish" />
                                </div>
                                <div className = "col-lg-4 col-md-4">
                                    <img src="./images/dish2.jpg" alt="" className = "dish" />
                                </div>
                                <div className = "col-lg-4 col-md-4">
                                    <img src="./images/dish3.jpg" alt="" className = "dish" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className = "col-lg-6 col-md-6 col-xs-12">
                    <div className = "section-img-right">
                        <div className = "thumbnail">
                            <img src="./images/citicafe.jpg" alt="thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
