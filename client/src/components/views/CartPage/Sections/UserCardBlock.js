import React, { useState, useEffect } from 'react'
import RenderCartImage from '../../../utils/RenderCartImage'

function UserCardBlock(props) {

    const [Products, setProducts] = useState([])

    const renderItems = Products.map((product, index) => {
        return <tr key={index} >
            <td><RenderCartImage images={product.images} /></td>
            <td>{product.quantity} EA</td>
            <td>$ {product.price}</td>
            <td><button onClick={()=>props.removeItem(product._id)} >Remove</button></td>
        </tr>
    })

    useEffect(() => {
        if(props.products){
            setProducts(props.products)
        }
    }, [props.products])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remobe from Cart</th>
                    </tr>
                </thead>
                {Products.length === 0 ?
                    <tbody></tbody> :
                    <tbody>{renderItems}</tbody>
                }
            </table>
        </div>
    )
}

export default UserCardBlock
