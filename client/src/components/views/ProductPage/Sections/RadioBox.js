import React, { useState } from "react";

function RadioBox(props) {
  const [Value, setValue] = useState("0");

  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => (
      <label key={value._id}>
        <input type="radio" value={`${value._id}`} /> {value.name}
      </label>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <div>
      <div className="buttonGroup" onChange={handleChange} value={Value}>
        <div className="row">{renderRadioBox()}</div>
      </div>
    </div>
  );
}

export default RadioBox;
