import { createStore } from "redux";
import { Reducers } from "./combinesReducers";

export const ConfigureStore = () => {
    const store = createStore(
       Reducers
    )
    return store
    
}