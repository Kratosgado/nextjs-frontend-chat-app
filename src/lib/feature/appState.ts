import { UserReducer } from "./userReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    user: UserReducer,
});