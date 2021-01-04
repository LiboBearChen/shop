import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageSlider from '../../utils/ImageSlider'


function ProductPage() {



    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('../../pictures/banner1.jpg')} style={{width:'150px', height:'150px'}} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../../pictures/banner2.jpg')} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../../pictures/banner3.jpg')} alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductPage
