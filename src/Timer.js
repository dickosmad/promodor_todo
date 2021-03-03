import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Timer = ({ setTimerState }) => {
  const [timer, setTimer] = React.useState(false);

  const handleClcik = () => {
    setTimer(!timer);
    if (!timer) {
      setTimerState(!timer, 5);
    } else {
      setTimerState(!timer, -5);
    }
  };

  return (
    <div>
      <AiOutlineClockCircle
        onClick={handleClcik}
        style={timer ? { color: "red" } : { color: "black" }}
      />
    </div>
  );
};

export default Timer;
