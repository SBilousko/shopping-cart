import React, { useState } from "react";
import { render } from "react-dom";

const Counter = (props) => {
  const { value } = props;
  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };
  const imageURL = "https://picsum.photos/200";

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    return (classes += value === 0 ? "bg-warning" : "bg-primary");
  };
  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
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
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
    // </React.Fragment>
  );
};

export default Counter;
