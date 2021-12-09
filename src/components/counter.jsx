import React from "react";

const Counter = () => {
  let count = 3;
  const formatCount = () => {
    return count === 0 ? "Empty" : count;
  }
  const imageURL = "https://picsum.photos/200";

  const getBadgeclasses = () => {
    let classes = "badge m-2 ";
    return classes += count === 0 ? "bg-warning" : "bg-primary";
  }
  const handleIncrement = () => {
    count = count + 1;
    console.log(count)
  }

  return (
    // <React.Fragment> 
    <>
      <img src={ imageURL } alt="image" />
      <span className={ getBadgeclasses() }>{ formatCount() }</span>
      <button className="btn btn-primary btn-sm m-2" onClick={ handleIncrement }>+</button>
    </>
    // </React.Fragment>
  );
};

export default Counter;