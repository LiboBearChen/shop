import React,{useEffect,useState} from 'react'
import Axios from 'axios';


function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
        .then(response=>{
            if(response.data.success){
                setProducts(response.data.products)
                console.log(Products)
            }else{
                alert('Failed to fetch product data')
            }
        })
    }, [])

    return (
        <>

        </>
    )
}

export default LandingPage
