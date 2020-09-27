import React, { useEffect } from 'react'

function UserCardBlock(props) {

    const renderItems = () => {

        props.products && props.products.map(product => (
            <tr key={product._id} >
                <td>
                    <img style={{ width: '70px' }} alt="product" src />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price}</td>
                <td><button onClick>Remove</button></td>
            </tr>
        ))
    }
    
    useEffect(() => {
        renderItems()
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
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
