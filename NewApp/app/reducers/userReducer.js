import * as t from '../constants';

const initialState = {
    login : false,
    user : { },
};
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case t.USER_LOGIN_SUCCESS : {
            // console.log('action login success :', action)
            return{
                ...state,
                login : action.data.status,
                token : action.data.token,
                user : action.data
            }
        }
        case t.USER_LOGIN_SUCCESS : {
            return{
                ...state,
                login : false
            }
        }
        case t.FETCH_USER :
            return {
                ...state,
                token:action.token,
                fetching:true
            };
        case t.USER_REGISTER_SUCCESS :
            return {
                ...state,
                register: action.data.status,
            };
        case t.USER_REGISTER_FAILURE :
            return {
                ...state,
                register: false,
                error: action.error
            };
        case t.RESET_STATE_USER :
            delete state.register;
            return{
                ...state 
            }
        default:
            return state
    }
}
export default userReducer;