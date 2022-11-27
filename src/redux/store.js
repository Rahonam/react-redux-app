import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";

const rootReducer = combineReducers({
    "cake": cakeReducer,
    "iceCream": iceCreamReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));