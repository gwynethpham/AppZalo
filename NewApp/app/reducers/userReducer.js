import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    FETCH_USER
} from '../constants';

const initialState = {
    login : false,
    user : { }
};
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER :
            return {
                ...state,
                token:action.token,
                fetching:true
            };
        case USER_REGISTER_SUCCESS :
            return {
                ...state,
                login: true,
                user : action.user
            };
        case USER_REGISTER_FAILURE :
            return {
                ...state,
                login: false,
                error: action.error
            };
        default:
            return state
    }
}
export default userReducer;