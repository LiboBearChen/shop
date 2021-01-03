import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ImageSlider(props) {
    return (
        <div>
            <Carousel>
                {props.images.map((image,index)=>(
                    <Carousel.Item key={index}>
                        <img style={{width:'100%', maxHeight:'150px'}} src={`http://localhost:5000/${image}`} alt="productImage" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
