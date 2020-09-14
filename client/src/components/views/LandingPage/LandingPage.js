import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import {Icon} from 'antd'

function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
        .then(response=>{
            if(response.data.success){
                setProducts(response.data.products)
                console.log(response.data.products)
            }else{
                alert('Failed to fetch product data')
            }
        })
    }, [])

    return (
        <div style={{width:'75%',margin:'3rem auto'}}>
            <div style={{textAlign:'center'}}>
                <h2>Let's Travel Anywhere <Icon type="rocket"/></h2>
            </div>
            {Products.length===0?
                <div style={{display:'flex',height:'300px',justifyContent:'center',alignItems:'center'}}>
                    <h2>No post yet...</h2>
                </div>:
                <div>

                </div>
            }
            <br/><br/>
            <div style={{display:'flex',justifyContent:'center'}}>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default LandingPage
