import { BUY_CAKE , ADD_CAKE } from './cakeTypes'

const initialState = {
    loading: false, 
    numOfCakes: 10,
    info: ''
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
            info : 'Buying cake'
        }
        case ADD_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 1,
            info : 'Adding cake'
        }
        default : return state
    }
}

export default cakeReducer