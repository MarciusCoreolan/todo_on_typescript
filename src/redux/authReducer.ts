import {
  ActionUserTypes,
  IuserState,
  userActionType,
} from "../types/userTypes";

const initialState: IuserState = {
  user: null,
  userAuthLoading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: userActionType
): IuserState => {
  switch (action.type) {
    case ActionUserTypes.USER_AUTH_START:
      return {
        ...state,
        userAuthLoading: true,
      };
    case ActionUserTypes.USER_AUTH_SUCCESSES:
      return {
        ...state,
        userAuthLoading: false,
        user: action.payload,
        error: null,
      };
    case ActionUserTypes.USER_LOG_OUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    case ActionUserTypes.USER_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
