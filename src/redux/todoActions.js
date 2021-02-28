export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_EDITING_TODO = "TOGGLE_EDITING_TODO";
export const CANCEL_TODO = "CANCEL_TODO";

export const addTodo = (text, timer) => ({
  type: ADD_TODO,
  payload: {
    text,
    edit: false,
    key: Date.now(),
    timer
  }
});

export const toggleEditingTodo = (key) => {
  console.log("key", key);
  return {
    type: TOGGLE_EDITING_TODO,
    payload: {
      key
    }
  };
};
export const updateTodo = (key, val, timer) => ({
  type: UPDATE_TODO,
  payload: {
    key,
    val,
    timer
  }
});
export const cancelTodo = (key, val) => ({
  type: CANCEL_TODO,
  payload: {
    key,
    val
  }
});
