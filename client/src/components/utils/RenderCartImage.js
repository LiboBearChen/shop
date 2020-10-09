import React from 'react'

function RenderCartImage(props) {

    const renderCartImage = (images) => {
        if (images && images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    return (
        <img style={{ width: '70px' }} alt="product" src={renderCartImage(props.images)} />
    )
}

export default RenderCartImage
