import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/IceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;