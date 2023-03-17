import cakeReducer from "./cakes/cakeReducer";
import rootReducer from "./rootReducer";
import { legacy_createStore as createStore} from 'redux';

// import { createStore } from '@reduxjs/toolkit';


// const store = createStore(cakeReducer);
const store = createStore(rootReducer)
export default store;