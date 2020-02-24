import { all } from 'redux-saga/effects';
import {getUserInfo, loginZalo, registerZalo} from "./user"

export default function* rootSagas() {
    yield all([
        getUserInfo(),
        loginZalo(),
        registerZalo(),
    ]);
}