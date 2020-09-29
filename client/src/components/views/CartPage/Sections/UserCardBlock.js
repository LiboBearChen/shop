import React, { useState, useEffect } from 'react'

function UserCardBlock(props) {

    const [Products, setProducts] = useState([1])

    const renderItems = Products.map((product, index) => {
        return <tr key={index} >
            <td>
                <img style={{ width: '70px' }} alt="product" src />
            </td>
            <td>{product.quantity} EA</td>
            <td>$ {product.price}</td>
            <td><button onClick>Remove</button></td>
        </tr>
    })


    useEffect(() => {
        console.log(props.products)
        setProducts(props.products)
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
                <tbody>
                    {Products.length > 0 ?
                        { renderItems } :
                        <tr>
                            <th>!!!!!!!!11</th>
                            <th>!!!!!!111</th>
                            <th>!!!!!!!!!!</th>
                            <th>!!!!!!!!!</th>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
