import { BUY_ICE_CREAM , ADD_ICE_CREAM } from './IceCreamTypes'

const initialState = {
    loading: false, 
    numOfIceCream: 10,
    info: ''
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1,
            info : 'Buying ice cream'
        }
        case ADD_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream + 1,
            info : 'Adding ice cream'
        }
        default : return state
    }
}

export default iceCreamReducer