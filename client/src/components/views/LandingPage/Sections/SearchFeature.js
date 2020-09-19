import React,{useState} from 'react'
import {Input} from 'antd'

const {Search}=Input

function SearchFeature() {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch=(event)=>{
        setSearchTerms(event.currentTarget.value)
    }

    return (
        <div>
            <Search value={SearchTerms} onChange={onChangeSearch} placeholder="Search By Product Name"/>
        </div>
    )
}

export default SearchFeature
