import { all } from 'redux-saga/effects';
import {getUserInfo} from "./user"

export default function* rootSagas() {
    yield all([
        getUserInfo()
    ]);
}