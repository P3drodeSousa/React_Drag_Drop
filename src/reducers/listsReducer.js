import { ADD_LIST, ADD_CARD, DRAG_HAPPENED } from "../actions";

const initialState = [
  {
    title: "last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${1}`,
        text: "we created",
      },
      {
        id: `card-${2}`,
        text: "ichalla a as",
      },
    ],
  },
  {
    title: "this episode",
    id: `list-${1}`,
    cards: [
      {
        id: 0,
        text: `card-${3}`,
      },
      {
        id: 1,
        text: `card-${4}`,
      },
      {
        id: 2,
        text: `card-${5}`,
      },
    ],
  },
];

let listId = 2;
let cardId = 6;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIST:
      const newList = {
        title: payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];
    case ADD_CARD:
      console.log(payload);
      const newCard = {
        text: payload.text,
        id: `card-${cardId}`,
      };
      cardId += 1;

      const newState = state.map((list) => {
        if (list.id === payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        }
        return list;
      });

      return newState;

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        drappableId,
        type,
      } = payload;
      const newsState = [...state];

      if (type === "list") {
        const list = newsState.splice(droppableIdStart, 1);
        newsState.splice(droppableIndexEnd, 0, ...list);
        return newsState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newsState;

    default:
      return state;
  }
};
