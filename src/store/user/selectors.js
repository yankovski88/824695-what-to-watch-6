import {NameSpace} from '../reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getHasErrorLogin = (state) => state[NameSpace.ALL_MOVIES].hasErrorLogin;
export const getDataLoggedIn = (state) => state[NameSpace.ALL_MOVIES].dataLoggedIn;
