export enum ActionUserTypes {
  USER_AUTH_START = "user/auth/start",
  USER_AUTH_SUCCESSES = "user/auth/successes",
  USER_LOG_OUT = "user/log/out",
  USER_AUTH_ERROR = "user/auth/error",
}
export interface IuserState {
  user: IUser | null;
  userAuthLoading: boolean;
  error: null | string;
}

interface IUser {
  userName: string;
  id: number;
  password: null;
  login: string;
  token: string;
}

interface IuserAuthStart {
  type: ActionUserTypes.USER_AUTH_START;
}
interface IuserAuthSuccesses {
  type: ActionUserTypes.USER_AUTH_SUCCESSES;
  payload: IUser | null;
}
interface IuserLogOut {
  type: ActionUserTypes.USER_LOG_OUT;
}
interface IuserAuthError {
  type: ActionUserTypes.USER_AUTH_ERROR;
  payload: string;
}

export type userActionType =
  | IuserAuthStart
  | IuserAuthSuccesses
  | IuserLogOut
  | IuserAuthError;
