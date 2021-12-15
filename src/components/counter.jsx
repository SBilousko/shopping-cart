import React, { useState } from "react";
import { render } from "react-dom";

const Counter = (props) => {
  const [value, setValue] = useState(props.value);
  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };
  const imageURL = "https://picsum.photos/200";

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    return (classes += value === 0 ? "bg-warning" : "bg-primary");
  };
  const handleIncrement = () => {
    setValue((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    // <React.Fragment>
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </div>
    // </React.Fragment>
  );
};

export default Counter;
