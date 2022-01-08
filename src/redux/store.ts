import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {todoReducer} from "./todoReducer";

export const store = createStore(todoReducer, applyMiddleware(thunk));

export type reducerState = ReturnType<typeof todoReducer>
