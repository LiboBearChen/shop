import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchFeature = (props) => {
  const onChange = (e, selectedOption) => {
    products.forEach((product) => {
      if (product.name === selectedOption) {
      }
    });

    selectedOption ? setState() : setState();
  };
  return (
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
  );
};

export default SearchFeature;
