import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import RadioBox from "./Sections/RadioBox";
import { price } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

function ProductPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [SearchTerms, setSearchTerms] = useState("");
  const [Filters, setFilters] = useState({
    category: [],
    price: [],
  });

  useEffect(() => {
    const variables = {
      order: null,
      sortBy: null,
      limit: Limit,
      skip: Skip,
      searchTerm: SearchTerms,
      filters: Filters,
    };

    getProducts(variables);
  }, []);

  const getProducts = async (variables) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    // "/api/product/getProducts"
    //
    Axios.post(`${serverUrl}/api/product/getProducts`, variables).then(
      (response) => {
        if (response.data.success) {
          if (variables.loadMore) {
            setProducts([...Products, ...response.data.products]);
          } else {
            setProducts(response.data.products);
          }

          setPostSize(response.data.postSize);
        } else {
          alert("Failed to fetch product data");
        }
      }
    );
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(variables);

    setSkip(skip);
  };

  //show all prodcut cards
  const renderCards = Products.map((product, index) => {
    return (
      <div className="col">
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={`https://liboshop.herokuapp.com/uploads/cards/card1.jpg`}
            style={{ width: "100%", height: "200px" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Game Art Illustration</h5>
            <br />
            <a href="/product" className="btn btn-primary">
              Check it
            </a>
          </div>
        </div>
      </div>

      // <Col key={index} lg={6} md={8} xs={24}>
      //   <Card
      //     hoverable={true}
      //     cover={
      //       <a href={`/product/${product._id}`}>
      //         <ImageSlider
      //           images={product.images}
      //           style={{ width: "100%", height: "150px" }}
      //         />
      //       </a>
      //     }
      //   >
      //     <Meta title={product.title} description={`$${product.price}`} />
      //   </Card>
      // </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getProducts(variables);
    setSkip(0);
  };

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;
    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    getProducts(variables);
    setSkip(0);
    setSearchTerms(newSearchTerm);
  };

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h2>All Products</h2>
      </div>
      <Row gutter={[16, 16]}>
        <RadioBox
          list={price}
          handleFilters={(filters) => handleFilters(filters, "price")}
        />
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
