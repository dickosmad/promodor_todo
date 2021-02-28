import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import TodoList from "./TodoList";

import {
  addTodo,
  toggleEditingTodo,
  updateTodo,
  cancelTodo
} from "./redux/todoActions";

const App = function ({
  items,
  addTodo,
  toggleEditingTodo,
  updateTodo,
  cancelTodo
}) {
  const [text, setText] = React.useState("");

  console.log("ADD PROPS on ADD ITEM", items);
  return (
    <div className="App">
      <form id="todo_form" onSubmit={(e) => e.preventDefault()}>
        <div className="add_todo">
          <input
            type="text"
            placeholder="Add your new Task "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={() => addTodo(text, 0)}>
            ADD{" "}
          </button>
        </div>
      </form>
      <TodoList
        items={items}
        edit={(id) => toggleEditingTodo(id)}
        updateTodo={(id, val, timer) => updateTodo(id, val, timer)}
        cancelTodo={(id, val) => cancelTodo(id, val)}
      ></TodoList>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.TodoReducer
});

const mapDispatchToProps = {
  addTodo,
  toggleEditingTodo,
  updateTodo,
  cancelTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
