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
            <ImageSlider images={banners} style={{ width: '100%', height: '300px' }}/>
        </div>

    )
}

export default ProductPage
