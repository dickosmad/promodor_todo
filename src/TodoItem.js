import React, { useState } from "react";
import "./TodoItem.css";
import { FaRegEdit } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import ParentTimer from "./ParentTimer";

const TodoItem = ({ item, edit, updateTodo, cancelTodo }) => {
  const [value, setValue] = useState(item.text);
  const [timer, setTimer] = React.useState(0);

  const TimerValue = (t) => {
    setTimer(t);
    console.log("timer", timer);
    console.log("item", item);
    // updateTodo(item.key, item.text, t)
  };
  //
  return (
    <>
      {item && (
        <div key={item.key}>
          {item.edit ? (
            <div className="todo__input">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <button onClick={() => updateTodo(item.key, value, timer)}>
                <GiCheckMark />
              </button>
              <button
                className="cancel__button"
                onClick={() => cancelTodo(item.key, item.text)}
              >
                <ImCross />
              </button>
            </div>
          ) : (
            <div className="todo" key={item.key}>
              <div>{item.text}</div>
              <div className="edit_and_clock">
                <button className="edit__button" onClick={() => edit(item.key)}>
                  <FaRegEdit />
                </button>
                <ParentTimer TimerValue={TimerValue} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default TodoItem;
