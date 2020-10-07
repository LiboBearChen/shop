import React,{useEffect} from 'react'
import Axios from 'axios'
import { response } from 'express'

function HistoryPage() {

    useEffect(() => {
        
        Axios.get('api/users/getHistory')
        .then(response=>{
            if(response.data.success){

            }else{
                alert('Failed to get History')
            }
        })
    }, [])
    return (
        <div>
            HistoryPage
        </div>
    )
}

export default HistoryPage
