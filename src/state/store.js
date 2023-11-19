import { applyMiddleware,combineReducers,createStore } 
from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer"

const reducers = combineReducers({
    user:userReducer
})

const initailState = {};

export const store = createStore(reducers,initailState,applyMiddleware(thunk));