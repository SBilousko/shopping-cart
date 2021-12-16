import React, { useState } from "react";
import { render } from "react-dom";

const Counter = (props) => {
  const { value } = props;
  console.log(props);
  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };
  const imageURL = "https://picsum.photos/200";

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    return (classes += value === 0 ? "bg-warning" : "bg-primary");
  };

  return (
    // <React.Fragment>
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>
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
