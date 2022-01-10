import { ActionUserTypes } from "../types/userTypes";
import { Dispatch } from "redux";

export const startLogin = (login: string, password: string, navigate:any) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch({
        type: ActionUserTypes.USER_AUTH_START,
      });
      const res = await fetch("http://localhost:3001/auth", {
        method: "POST",
        body: JSON.stringify({
          login,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (json.error) {
        await dispatch({
          type: ActionUserTypes.USER_AUTH_ERROR,
          payload: json.error,
        });
      } else {
        await dispatch({
          type: ActionUserTypes.USER_AUTH_SUCCESSES,
          payload: json,
        });
        navigate(`/${json.id}`);
      }
    } catch (e) {
      console.error(e);
    }
  };
};
