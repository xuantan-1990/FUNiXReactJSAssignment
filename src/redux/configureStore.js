import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./combinesReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(Reducers, applyMiddleware(thunk, logger));
    return store
    
}