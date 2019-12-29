import { put, call, takeLatest} from 'redux-saga/effects';
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,

    FETCH_USER
} from '../constants';

function* getUser(action) {
    try{
        // const data = yield call(getUserInfo);
        let data = [];
        yield put({type : USER_LOGIN_SUCCESS, data})
    }
    catch(e) {
        yield put({type:USER_LOGIN_FAILURE,e})
    }
}

export function* getUserInfo() {
    yield takeLatest(FETCH_USER, getUser);
}