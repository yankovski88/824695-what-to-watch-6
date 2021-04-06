import {AuthorizationStatus} from "../../constants/constants";
import {ActionType} from "../action";
import {userAuthorization} from "./user";


describe(`Reducer 'selected movie' should work correctly`, () => {

  it(`Reducer should get REQUIRED_AUTHORIZATION`, () => {
    const state = {
      authorizationStatus: ``, // null, // поле чтобы знать авторизирован ли пользователь
      hasErrorLogin: false, // логин не проходит
      dataLoggedIn: {},
    };


    const item = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    const stateNew = {
      ...state,
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(userAuthorization(state, item)).toEqual(
        stateNew
    );
  });


  it(`Reducer should get HAS_ERROR_LOGIN`, () => {
    const state = {
      authorizationStatus: ``, // null, // поле чтобы знать авторизирован ли пользователь
      hasErrorLogin: false, // логин не проходит
      dataLoggedIn: {},
    };


    const item = {
      type: ActionType.HAS_ERROR_LOGIN,
      payload: true,
    };

    const stateNew = {
      ...state,
      hasErrorLogin: true,
    };

    expect(userAuthorization(state, item)).toEqual(
        stateNew
    );
  });


  it(`Reducer should get LOGGED_IN`, () => {
    const state = {
      authorizationStatus: ``, // null, // поле чтобы знать авторизирован ли пользователь
      hasErrorLogin: false, // логин не проходит
      dataLoggedIn: {},
    };


    const item = {
      type: ActionType.LOGGED_IN,
      payload: {
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        email: `1@mail.ru`,
        id: 1,
        name: `1`
      },
    };

    const stateNew = {
      ...state,
      dataLoggedIn: {
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        email: `1@mail.ru`,
        id: 1,
        name: `1`
      },
    };

    expect(userAuthorization(state, item)).toEqual(
        stateNew
    );
  });

});
