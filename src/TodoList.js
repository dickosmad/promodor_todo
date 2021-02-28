import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoItem.css";
const TodoList = ({ items, edit, updateTodo, cancelTodo, parentTimerState }) =>
  items &&
  items.map((item) => {
    console.log("items todolist", items);
    return (
      <TodoItem
        item={item}
        edit={edit}
        updateTodo={updateTodo}
        cancelTodo={cancelTodo}
        parentTimerState={parentTimerState}
      />
    );
  });

export default TodoList;
