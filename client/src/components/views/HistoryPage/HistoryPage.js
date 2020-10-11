import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import RenderCartImage from '../../utils/RenderCartImage'

function HistoryPage() {

    const [Product, setProduct] = useState([])
    const [History, setHistory] = useState([])

    useEffect(() => {
        
        Axios.get('/api/users/getHistory')
        .then(response=>{
            if(response.data.success){
                setHistory(response.data.history)
            }else{
                alert('Failed to get History')
            }
        })
    }, [])

    const downloadItem = (productId) => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
                console.log(Product)
            })
        
        console.log(History)
    }

    return (
        <div style={{width:'80%',margin:'3rem auto'}} >
            <div style={{textAlign:'center'}} >
                <h1>History</h1>
            </div>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Product Name</th>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Date of Purchase</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {History.map((item,index)=>(
                        <tr key={index}>
                            <td><RenderCartImage images={item.images} /></td>
                            <td>{item.name}</td>
                            <td>{item.paymentId}</td>
                            <td>{item.price}</td>
                            <td>{item.dateOfPurchase}</td>
                            <td><button onClick={()=>downloadItem(item.id)} >Download</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
