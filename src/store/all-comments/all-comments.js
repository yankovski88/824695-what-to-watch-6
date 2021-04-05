import {ActionType} from "../action";

const initialState = {
  isAllComments: false, // все коменты полученны
  allComments: [], // массив комментов пуст
};

export const allComments = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_COMMENTS:
      return {
        ...state,
        // здесь должен быть объект с комментами
        allComments: action.payload,
        isFilmFound: true,
        isAllComments: true,
      };
    default:
      return state;
  }
};
