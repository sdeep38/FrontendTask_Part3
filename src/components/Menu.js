import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useState } from 'react'

export default function Menu() {

    const [sliderRef, setSliderRef] = useState(null)
    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }

    const menuCards = [
        {
            imageSrc: './images/dish1.jpg',
            price: 'Rs 100',
        },
        {
            imageSrc: './images/dish2.jpg',
            price: 'Rs 200',
        },
        {
            imageSrc: './images/dish3.jpg',
            price: 'Rs 150',
        },
        {
            imageSrc: './images/dish1.jpg',
            price: 'Rs 100',
        },
        {
            imageSrc: './images/dish2.jpg',
            price: 'Rs 200',
        },
        {
            imageSrc: './images/dish3.jpg',
            price: 'Rs 150',
        },
        {
            imageSrc: './images/dish1.jpg',
            price: 'Rs 100',
        },
        {
            imageSrc: './images/dish2.jpg',
            price: 'Rs 200',
        },
        {
            imageSrc: './images/dish3.jpg',
            price: 'Rs 100',
        },
        {
            imageSrc: './images/dish1.jpg',
            price: 'Rs 100',
        },

    ]

    return (

        <section className="section" id="menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="section-text-left">
                            <div className="heading">
                                <h6 className="my-0">Our Menu</h6>
                                <h2>Our selection of dishes with quality taste</h2>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="menu-item-carousel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slick-menu-slider">
                                <div className="controls">
                                    <button onClick={sliderRef?.slickPrev}>
                                        <span className="fa fa-angle-left"></span>
                                    </button>
                                    <button onClick={sliderRef?.slickNext}>
                                        <span className="fa fa-angle-right"></span>
                                    </button>
                                </div>

                                <Slider ref={setSliderRef} {...sliderSettings}>
                                    {menuCards.map((card, index) => (
                                        <div key={index} className='item-card' style={{backgroundImage : 'url({card.imageSrc})'}}>
                                            <span className="price">{card.price}</span>
                                            <button id="add-to-cart">Add to Cart</button>
                                        </div>
                                    ))}

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}
