import { Reducer } from 'redux';
import { AUTH_ACTION_TYPES } from '../actions/actionTypes';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface User {
  // Define user properties here
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authReducer: Reducer<AuthState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_REQUEST:
    case AUTH_ACTION_TYPES.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
        error: null,
      };

    case AUTH_ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload.error,
      };

    case AUTH_ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };

    case AUTH_ACTION_TYPES.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default authReducer;
