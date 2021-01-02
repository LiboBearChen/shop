import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd'
import ImageSlider from '../../utils/ImageSlider'
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import {continents,price} from './Sections/Datas'
import SearchFeature from './Sections/SearchFeature'

const { Meta } = Card;

function ProductPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [SearchTerms, setSearchTerms] = useState("")
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {
        const variables = {
            skip: Skip,
            limit: Limit
        }

        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                        
                    } else {
                        setProducts(response.data.products)
                    }
                    
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fetch product data')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true
        }

        getProducts(variables)

        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {
        return <Col key={index} lg={6} md={8} xs={24}>
            <Card hoverable={true} cover={<a href={`/product/${product._id}`}><ImageSlider images={product.images} /></a>} >
                <Meta title={product.title} description={`$${product.price}`} />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters
        }

        getProducts(variables)
        setSkip(0)
    }

    const handlePrice=(value)=>{
        const data=price
        let array=[]

        for(let key in data){
            if(data[key]._id===parseInt(value,10)){
                array=data[key].array
            }
        }

        return array
    }

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }
        
        newFilters[category] = filters
        if (category === "price") {
            let priceValues=handlePrice(filters)
            newFilters[category]=priceValues
        }
        showFilteredResults(newFilters)
        setFilters(newFilters)

    }

    const updateSearchTerms=(newSearchTerm)=>{
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm:newSearchTerm
        }

        getProducts(variables)
        setSkip(0)
        setSearchTerms(newSearchTerm)
        
    }

    return (
        <div>LANDING!!!!!!!!!!!</div>
    )
}

export default ProductPage
