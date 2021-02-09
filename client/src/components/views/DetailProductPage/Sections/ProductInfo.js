import React, { useEffect, useState } from "react";

function ProductInfo(props) {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCartHandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <h5>
        <strong>Details</strong>
      </h5>
      <ul className="nav nav-pills">
        <li className="active">
          <a data-toggle="pill" href="#home">
            Description
          </a>
        </li>

        <li>
          <a data-toggle="pill" href="#menu3">
            Price
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="home" className="tab-pane fade in active show">
          <p>{Product.description}</p>
        </div>

        <div id="menu3" className="tab-pane fade">
          <p>{Product.price} $</p>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
