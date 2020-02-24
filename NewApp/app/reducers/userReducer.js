import * as t from '../constants';

const initialState = {
    login : false,
    user : { }
};
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case t.FETCH_USER :
            return {
                ...state,
                token:action.token,
                fetching:true
            };
        case t.USER_REGISTER_SUCCESS :
            console.log('action',action)
            return {
                ...state,
                login: true,
                user : action.user
            };
        case t.USER_REGISTER_FAILURE :
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