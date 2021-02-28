import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Timer = () => {
  const [timer, setTimer] = React.useState(false);

  return (
    <div>
      <AiOutlineClockCircle
        onClick={() => setTimer(!timer)}
        style={timer ? { color: "red" } : { color: "black" }}
      />
    </div>
  );
};

export default Timer;
