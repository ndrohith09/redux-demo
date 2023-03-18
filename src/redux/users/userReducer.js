import { AXIOS_USERS_FAILURE , AXIOS_USERS_SUCCESS , AXIOS_USERS_REQUEST } from "./userTypes";

const initialState = {
    loading: false,
    users : [],
    error: '',
    info : ''
}

const userReducer = (state = initialState , action) => {
    console.log('action users ---------> ', action , state); 
    switch(action.type) {
        case AXIOS_USERS_REQUEST: return {
            ...state,
            loading: true,
            info : action.info
        }
        case AXIOS_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: '',
            info : action.info
        }
        case AXIOS_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload,
            info : action.info
        }

        default  : return state
    }
}

export default userReducer