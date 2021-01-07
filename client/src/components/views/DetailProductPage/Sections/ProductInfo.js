import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd'

function ProductInfo(props) {

    const [Product, setProduct] = useState([])

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCartHandler = () => {
        props.addToCart(props.detail._id)
    }

    return (
        <div>
            <h5><strong>Details</strong></h5>
            <ul className="nav nav-pills">
                <li className="active"><a data-toggle="pill" href="#home">Description</a></li>
                <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
                <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
                <li><a data-toggle="pill" href="#menu3">Price</a></li>
            </ul>
            <div className="tab-content">
                <div id="home" className="tab-pane fade in active show">
                    <p>{Product.description}</p>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div id="menu3" className="tab-pane fade">
                    <p>{Product.price} $</p>
                    <br />
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="large" shape="round" type="danger" onClick={addToCartHandler} >Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
