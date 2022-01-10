import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducerState } from "../redux/store";

export const useTypeSelector: TypedUseSelectorHook<reducerState> = useSelector;
