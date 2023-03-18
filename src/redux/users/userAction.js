import { AXIOS_USERS_FAILURE , AXIOS_USERS_SUCCESS , AXIOS_USERS_REQUEST } from "./userTypes";
import axios from "axios";

export const axiosUsersRequest = () => {
    console.log('axiosUsersRequest')
    return {
        type: AXIOS_USERS_REQUEST,
        info : 'Fetching users',
        loading : true
    }
}

export const axiosUsersSuccess = users => {
    console.log('axiosUsersSuccess' , users)
    return {
        type: AXIOS_USERS_SUCCESS,
        info : 'Fetching users Success',
        payload: users,
        loading : false
    }
}

export const axiosUsersFailure = error => {
    return {
        type: AXIOS_USERS_FAILURE,
        info : 'Fetching users Failure',
        payload: error,
        loading : false
    }
}

export const fetchUsers = () => {

    return (dispatch) => {
        dispatch(axiosUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(axiosUsersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(axiosUsersFailure(errorMsg))
        })
    }

}