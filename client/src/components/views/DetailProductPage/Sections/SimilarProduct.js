import React, { useEffect, useState } from "react";
import Axios from "axios";

function SimilarProduct() {
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

  //show all prodcut cards
  const renderCards = Products.map((product, index) => {
    return (
      <div className="col" key={index}>
        <a href={`/product/${product._id}`}>
          <div
            className="card mx-auto"
            style={{ width: "10rem", height: "8rem" }}
          >
            <img
              className="card-img-top"
              src={`https://liboshop.herokuapp.com/${product.images[0]}`}
              style={{ width: "100%", height: "80px" }}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-title">{product.title}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="container">
      {Products.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div className="row">{renderCards}</div>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}

export default SimilarProduct;
