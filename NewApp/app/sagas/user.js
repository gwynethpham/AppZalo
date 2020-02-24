
import axios from "axios";
import {apiLocal} from '../lib/config'
import { put, call, takeLatest} from 'redux-saga/effects';
import * as t from '../constants';
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
        console.log('param_______', param);
    }
    catch(e){
        yield put({type : t.USER_REGISTER_FAILURE,e});
    }
}
export function* loginZalo(){
    yield takeLatest(t.LOGIN_REQUEST,handleLogin);
}
const fetRegister = async (data) =>{
    return await axios.post(`${apiLocal}/users/register`,{param: data})
};
function* handleRegister(action){
    try{
        const data = yield call(fetRegister, action.param)
        console.log('data_____', data);
        yield put({type : t.USER_REGISTER_SUCCESS, data});
    }
    catch(e){
        yield put({type : t.USER_REGISTER_FAILURE,e});
    }
}
export function* registerZalo(){
    yield takeLatest(t.REGISTER_REQUEST,handleRegister);
}