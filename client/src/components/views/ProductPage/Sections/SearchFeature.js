import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchFeature = (props) => {
  const [chosen, setChosen] = useState(false);
  const [url, setUrl] = useState("");

  const onChange = (e, selectedOption) => {
    let product;
    products.forEach((p) => {
      if (p.name === selectedOption) {
        product = p;
      }
    });

    if (selectedOption) {
      setChosen(true);
      setUrl(`/product/${product._id}`);
    }
  };

  return (
    <div>
      <Autocomplete
        options={props.productNames}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="available products"
            variant="outlined"
            fullWidth
          />
        )}
      />
      {chosen ? (
        <div>
          <a href={url}>Go To This Product</a>
        </div>
      ) : (
        <div>Search For A Product</div>
      )}
    </div>
  );
};

export default SearchFeature;
