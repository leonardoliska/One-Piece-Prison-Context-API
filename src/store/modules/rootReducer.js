import { combineReducers } from "redux"

import piratesReducer from "../modules/pirates/reducer"

export const reducers = combineReducers({ pirates: piratesReducer })
