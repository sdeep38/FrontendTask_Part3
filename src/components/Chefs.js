import React from 'react'

export default function Chefs() {
  return (
    <section className = "section" id="chefs">
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-4 offset-lg-4 text-center">
                    <div className = "heading">
                        <h6>Chefs</h6>
                        <h2>Our Chefs Are Ready To Serve You</h2>
                    </div>
                </div>
            </div>
            <div className = "chef-slider">
                <div className = "row">
                    <div className = "col-lg-4 col-md-4 col-xs-12">
                        <div className = "chef-card">
                            <div className = "profile-img">
                                <img src="./images/c1.jpg" alt="Chef #1" />
                            </div>
                            <div className = "profile-info">
                                <h4 className = "name">Randy Walker</h4>
                                <span className = "spec">Pastry Chef</span>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-xs-12">
                        <div className = "chef-card">
                            <div className = "profile-img">
                                <img src="./images/c2.jpg" alt="Chef #2" />
                            </div>
                            <div className = "profile-info">
                                <h4 className = "name">Alein Brown</h4>
                                <span className = "spec">Dessert Chef</span>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-xs-12">
                        <div className = "chef-card">
                            <div className = "profile-img">
                                <img src="./images/c3.jpg" alt="Chef #3" />
                            </div>
                            <div className = "profile-info">
                                <h4 className = "name">Mathew Louis</h4>
                                <span className = "spec">Pancake Chef</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
