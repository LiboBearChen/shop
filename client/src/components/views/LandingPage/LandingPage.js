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
                                <img className="card-img-top" src={`https://liboshop.herokuapp.com/uploads/cards/card1.jpg`} style={{ width: '100%', height: '200px' }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Game Art Illustration</h5>
                                    <br />
                                    <a href="/product" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`https://liboshop.herokuapp.com/uploads/cards/card2.jpg`} style={{ width: '100%', height: '200px' }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Game MOD</h5>
                                    <br />
                                    <a href="/product" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`https://liboshop.herokuapp.com/uploads/cards/card1.jpg`} style={{ width: '100%', height: '200px' }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Game Fiction</h5>
                                    <a href="/product" className="btn btn-primary">Check it</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <div className="card mx-auto" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`https://liboshop.herokuapp.com/uploads/cards/card2.jpg`} style={{ width: '100%', height: '200px' }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Game Maps</h5>
                                    <a href="/product" className="btn btn-primary">Check it</a>
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
