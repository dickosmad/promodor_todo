import React from "react";
import Timer from "./Timer";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button>{count} </button>
    </div>
  );
};

export default Counter;
