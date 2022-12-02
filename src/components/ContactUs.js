import React, { useState } from 'react'

export default function ContactUs() {
    const [isSubmitted, showMessage] = useState(false);

    const submitForm = () => {
        showMessage(true);
    }

    return (
        <section className="section" id="reservation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="left-text-content">
                            <div className="heading">
                                <h6>Contact Us</h6>
                                <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a omnis tempora est
                                officiis commodi ut veritatis aspernatur porro earum.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="phone">
                                        <i className="fa fa-phone"></i>
                                        <h3>Call Us</h3>
                                        <span>
                                            <a href="/">080-090-0990</a><br />
                                            <a href="/">080-090-0990</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="email">
                                        <i className="fa fa-envelope"></i>
                                        <h3>Email Us</h3>
                                        <span>
                                            <a href="/">help@company.com</a><br />
                                            <a href="/">help@company.com</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form action="/" method="post" id="contact">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4>Table Reservation</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name="name" id="name" placeholder="Your Name *" required />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="email" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name="phone" id="phone" placeholder="Your Phone Number *" required />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <select name="noguests" id="noguests">
                                            <option value="noguests">Number of Guests</option>
                                            <option value="1" id="breakfast">1</option>
                                            <option value="2" id="lunch">2</option>
                                            <option value="3" id="dinner">3</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="date" placeholder="DD/MM/YYYY" id='date'
                                            required />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <select name="time" id="time">
                                            <option value="time">Time *</option>
                                            <option value="Breakfast" id="breakfast">Breakfast</option>
                                            <option value="Lunch" id="lunch">Lunch</option>
                                            <option value="Dinner" id="dinner">Dinner</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="message" id="message" rows="6" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        {isSubmitted && (
                                            <div className="confirm_msg">Reservation Made</div>
                                        )}
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" id="form-submit" className="main-button-icon" onClick={submitForm}>Make Your Reservation</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
