import React, { useEffect, useState } from 'react'
import ImageSlider from '../../utils/ImageSlider'

const banners = [
    'uploads/banners/banner1.jpg',
    'uploads/banners/banner2.jpg',
    'uploads/banners/banner3.jpg'
]


function ProductPage() {

    return (
        <div className='container'>
            <ImageSlider images={banners} style={{ width: '100%', height: '300px' }} />
            <div style={{textAlign: 'center'}}>
                <h1>Find Solutions for Your ...</h1>
                <h4>...</h4>
                <div style={{ textAlign: 'center'}}>
                    <div className="row " style={{ marginBottom: '20px' }}>
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`http://localhost:5000/uploads/cards/card1.jpg`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Stock market analysis website</h5>
                                    <p className="card-text"><strong>Tech stack:</strong></p>
                                    <p className="card-text">ReactJS</p>
                                    <br />
                                    <a href="/" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`http://localhost:5000/uploads/cards/card2.jpg`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Webpage analysis chrome extension</h5>
                                    <p className="card-text"><strong>Tech stack:</strong></p>
                                    <p className="card-text">jQuery</p>
                                    <br />
                                    <a href="/" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`http://localhost:5000/uploads/cards/card1.jpg`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Digital product shopping website</h5>
                                    <p className="card-text"><strong>Tech stack:</strong></p>
                                    <p className="card-text">MERN(MongoDB, Express, React and Node.js)</p>
                                    <a href="/" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`http://localhost:5000/uploads/cards/card2.jpg`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Coding blog (this website)</h5>
                                    <p className="card-text"><strong>Tech stack:</strong></p>
                                    <p className="card-text">Flask</p>
                                    <a href="/" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductPage
