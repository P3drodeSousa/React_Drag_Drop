import { ADD_CARD, DRAG_HAPPENED } from "./index";

export const addCard = (listId, text) => (dispatch) => {
  console.log("called");
  dispatch({ type: ADD_CARD, payload: { text, listId } });
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  drappableId,
  type
) => ({
  type: DRAG_HAPPENED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    drappableId,
    type,
  },
});
