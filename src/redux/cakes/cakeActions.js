import { BUY_CAKE, ADD_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {
    console.log('number', number);
    try {
        console.log('buy return');
        return {
            type: BUY_CAKE,
            payload : number
        }
    }
    catch (error) {
        console.log('error', error);
    }
    
}

export const addCake = () => {
    return {
        type: ADD_CAKE
    }
}
