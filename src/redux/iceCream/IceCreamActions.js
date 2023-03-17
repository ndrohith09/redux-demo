import { BUY_ICE_CREAM, ADD_ICE_CREAM } from './IceCreamTypes'

export const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM
    }
}

export const addIceCream = () => {
    return {
        type: ADD_ICE_CREAM
    }
}
