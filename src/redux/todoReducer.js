import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_EDITING_TODO,
  UPDATE_TODO,
  CANCEL_TODO
} from "./todoActions";

const initialState = {
  items: [],
  edit: false
};

export const TodoReducer = (state = initialState, action) => {
  console.log("action 1", action, state);
  switch (action.type) {
    case "ADD_TODO":
      // console.log("action", action);
      // console.log("state", state);
      // console.log("state items", state.items);

      return state.concat([action.payload]);

    case "TOGGLE_EDITING_TODO":
      console.log("action toggle", action);
      console.log("state", state);
      let updateItems = [...state];
      let idx = updateItems.findIndex(
        (item) => item.key === action.payload.key
      );
      updateItems[idx].edit = true;
      return updateItems;

    case "UPDATE_TODO":
      const update = [...state];
      const id = update.findIndex((item) => item.key === action.payload.key);
      update[id].edit = false;
      update[id].text = action.payload.val;
      update[id].timer = action.payload.timer;
      console.log("update", update);
      return update;
    case "CANCEL_TODO":
      console.log("state cancel todo", state);
      let updates = [...state];
      let ids = updates.findIndex((item) => item.key === action.payload.key);
      updates[ids].edit = false;
      updates[ids].text = action.payload.val;
      return updates;

    default:
      return state.items;
  }
};

// 1. first state is the default = [] ;
// 2 . [].items.
