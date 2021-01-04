import React from 'react'

function ImageSlider(props) {
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {props.images.map((image, index) => (
                        index === 0 ?
                            <div className="carousel-item active" key={index}>
                                <img className="d-block w-100" style={props.style} src={`http://localhost:5000/${image}`} alt="productImage" />
                            </div>
                            :
                            <div className="carousel-item" key={index}>
                                <img className="d-block w-100" style={props.style} src={`http://localhost:5000/${image}`} alt="productImage" />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider
