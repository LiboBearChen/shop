import React, { useState, useEffect } from 'react'

function UserCardBlock(props) {

    const [Products, setProducts] = useState([])

    const renderCartImage=(images)=>{
        if(images.length>0){
            let image=images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = Products.map((product, index) => {
        return <tr key={index} >
            <td>
                <img style={{ width: '70px' }} alt="product" src={renderCartImage(product.images)} />
            </td>
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
