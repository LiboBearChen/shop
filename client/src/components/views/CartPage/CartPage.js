import React, {useEffect} from 'react'

function CartPage(props) {

    useEffect(() => {
        let cartItems=[]

        if(props.user.userData&&props.user.userData.cart){
            if(props.user.userData.cart.length>0){
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
            }
        }
    }, [])

    return (
        <div>
            CartPage
        </div>
    )
}

export default CartPage
