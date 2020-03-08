
import axios from "axios";
import {apiLocal} from '../lib/config';
import {handleResponse} from '../lib/handleResponse';
import { put, call, takeLatest} from 'redux-saga/effects';
import * as t from '../constants';
import {loginRequest} from '../services/api';
function* getUser(action) {
    try{
        // const data = yield call(getUserInfo);
        let data = [];
        yield put({type : t.USER_LOGIN_SUCCESS, data})
    }
    catch(e) {
        yield put({type: t.USER_LOGIN_FAILURE,e})
    }
}

export function* getUserInfo() {
    yield takeLatest(t.FETCH_USER, getUser);
}

function* handleLogin(param){
    try{
        const data = yield call(loginRequest, param);
        console.log('data', data);
        if(data.status){
            yield put({ type : t.USER_LOGIN_SUCCESS, data});
        }
        else{
            yield put({type : t.USER_LOGIN_FAILURE, data})
        }
    }
    catch(e){
        yield put({type : t.USER_REGISTER_FAILURE,e});
    }
}
export function* loginZalo(){
    yield takeLatest(t.LOGIN_REQUEST,handleLogin);
}
const fetRegister = async (data) =>{
    const register =  await axios.post(`${apiLocal}/users/register`,{param: data});
    console.log('register', register.data);
    return register.data;
};
function* handleRegister(action){
    try{
        const data = yield call(fetRegister, action.param)
        if(data.status){
            yield put({type : t.USER_REGISTER_SUCCESS, data});
        }else{
            yield put({type : t.USER_REGISTER_FAILURE, data});
        }
    }
    catch(e){
        yield put({type : t.USER_REGISTER_FAILURE,e});
    }
}
export function* registerZalo(){
    yield takeLatest(t.REGISTER_REQUEST,handleRegister);
}