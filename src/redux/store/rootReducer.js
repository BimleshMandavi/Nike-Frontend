import { combineReducers } from "@reduxjs/toolkit";
import {reducers as authReducer} from '../slices/auth'
export const rootReducer = combineReducers({
       auth:authReducer
})