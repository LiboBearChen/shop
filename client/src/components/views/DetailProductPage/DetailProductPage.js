import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import SimilarProduct from "./Sections/SimilarProduct";
import Detail from "./Sections/Detail";
//import { addToCart } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

function DetailProductPage(props) {
  //  const dispatch = useDispatch();
  //get product id from url
  const productId = props.match.params.productID;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    Axios.get(
      `${serverUrl}/api/product/products_by_id?id=${productId}&type=single`
    ).then((response) => {
      setProduct(response.data[0]);
    });
  }, []);

  const addToCartHandler = (productId) => {
    //    dispatch(addToCart(productId));
  };

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Product.title}</h1>
      </div>
      <br />
      <div className="row">
        <div className="col" key="img">
          <ProductImage detail={Product} />
        </div>
        <div className="col" key="info">
          <ProductInfo addToCart={addToCartHandler} detail={Product} />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col" key="text" style={{ width: "10%" }}>
          <p>Similar Products: </p>
        </div>
        <div className="col" key="similar" style={{ width: "90%" }}>
          <SimilarProduct criteria={Product.} />
        </div>
      </div>
      <div className="row">
        <div className="col" key="detail" style={{ width: "100%" }}>
          <Detail/>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
