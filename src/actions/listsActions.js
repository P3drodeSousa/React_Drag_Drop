import { ADD_LIST } from "./index";

export const addList = (title) => (dispatch) => {
  dispatch({ type: ADD_LIST, payload: title });
};
