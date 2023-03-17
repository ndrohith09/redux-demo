const redux = require('redux');
const reduxLogger = require('redux-logger');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    users : [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        info : 'Fetching users'
    }
}

const fetchUsersSuccess = users => { 
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    console.log('error', error)
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }

        default  : return state
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the array of users
            // console.log('response.data', response.data)
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(userReducer , applyMiddleware(thunkMiddleware))

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => { console.log('Updated state', store.getState())})
// store.dispatch(fetchUsersRequest())
// store.dispatch(fetchUsersSuccess(['user1', 'user2']))
// store.dispatch(fetchUsersFailure('Error fetching users'))
store.dispatch(fetchUsers()) 
// console.log('Final state', store.getState())
unsubscribe() 
