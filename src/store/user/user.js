import {ActionType} from "../action";

const initialState = {
  authorizationStatus: ``, // null, // поле чтобы знать авторизирован ли пользователь
  hasErrorLogin: false, // логин не проходит
  dataLoggedIn: {},
};

export const userAuthorization = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.HAS_ERROR_LOGIN:
      return {
        ...state,
        hasErrorLogin: action.payload,
      };
    case ActionType.LOGGED_IN:
      return {
        ...state,
        dataLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
