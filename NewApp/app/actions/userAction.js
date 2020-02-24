import * as t from '../constants/index'

export const userAction = {
    login,
    register,
}

function login(param) {
    return { type : t.LOGIN_REQUEST , param }
}

function register(param) {
    return { type : t.REGISTER_REQUEST, param }
}