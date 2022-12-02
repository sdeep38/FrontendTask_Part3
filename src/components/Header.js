import React from 'react'

export default function Header() {
  return (
    <div className = "header">
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-lg-12 px-0">
                        <div className = "page-banner">
                            <div id="carouselExampleControls" className = "carousel slide" data-bs-ride="carousel">
                                <div className = "carousel-inner">
                                    <div className = "carousel-item active">
                                        <img src="./images/slide-01.jpg" className = "d-block w-100" alt="..." />
                                    </div>
                                    <div className = "carousel-item">
                                        <img src="./images/slide-02.jpg" className = "d-block w-100" alt="..." />
                                    </div>
                                    <div className = "carousel-item">
                                        <img src="./images/slide-03.jpg" className = "d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className = "carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className = "carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className = "visually-hidden">Previous</span>
                                </button>
                                <button className = "carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className = "visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
