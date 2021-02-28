import React, { useEffect, useRef } from "react";
import Timer from "./Timer";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import "./Timer.css";

const ParentTimer = ({ TimerValue }) => {
  const [state, setState] = React.useState({
    timer1: false,
    timer2: false,
    timer3: false,
    value: 0
  });
  const [playerState, setPlayerState] = React.useState(false);
  const [count, setCount] = React.useState(0);
  let timerToClearSomewhere = useRef(null);

  useEffect(() => {
    if (state.value > 0 && playerState) {
      timerToClearSomewhere.current = setTimeout(() => {
        setState({ ...state, value: state.value - 1 });
      }, 1000);
    }
    if (!playerState && state.value !== 0) {
      setCount(state.value);
      clearInterval(timerToClearSomewhere.current);
    }
    if (state.value === 0 && playerState) {
      setPlayerState(false);
    }
    TimerValue(count);
  }, [setPlayerState, state, playerState, TimerValue, count]);

  const playerCountDown = () => {
    setState({ ...state, value: count });
    setPlayerState(true);
  };

  return (
    <>
      <div className="timer">
        <Timer
          setTimerState={(s, v) => {
            setState({ ...state, timer1: s, value: state.value + v });
          }}
        />
        <Timer
          setTimerState={(s, v) => {
            setState({ ...state, timer2: s, value: state.value + v });
          }}
        />
        <Timer
          setTimerState={(s, v) => {
            setState({ ...state, timer3: s, value: state.value + v });
          }}
        />
      </div>
      <div className="counter">
        <p>{state.value}</p>
        {!playerState ? (
          <span onClick={playerCountDown} className="play">
            {" "}
            <AiOutlinePlayCircle />{" "}
          </span>
        ) : (
          <span onClick={() => setPlayerState(false)} className="play">
            {" "}
            <AiOutlinePauseCircle />{" "}
          </span>
        )}
      </div>
    </>
  );
};

export default ParentTimer;
