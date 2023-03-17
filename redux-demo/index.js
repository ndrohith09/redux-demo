// import { createStore } from '@reduxjs/toolkit';

// import { legacy_createStore as createStore} from 'redux';
// import redux from 'redux';
// import { createStore } from 'redux';
const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Redux action for cake'
  }
}

function buyIceCream() {
  return {
    type :  BUY_ICECREAM,
    info: 'Redux action for icecream'
  }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams : 5,
  numOfFlavours : 6
}

const CakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
      case BUY_ICECREAM: 
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
        numOfFlavours: state.numOfFlavours + 1
      }

      default: return state
  }
}

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer
});
const store = createStore(rootReducer , applyMiddleware(logger));

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()

// unsubscribe
// store.unsubscribe()