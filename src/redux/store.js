import rootReducer from "./rootReducer";
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// import { createStore } from '@reduxjs/toolkit';


// const store = createStore(cakeReducer);
const store = createStore(
    rootReducer , 
    composeWithDevTools(applyMiddleware(logger , thunk)))
export default store;