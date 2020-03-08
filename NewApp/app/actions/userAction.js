import * as t from '../constants/index'

export const userAction = {
    login,
    register,
    resetState
}

function login(param) {
    return { type : t.LOGIN_REQUEST , param }
}

function register(param) {
    return { type : t.REGISTER_REQUEST, param }
}

function resetState() {
    return { type : t.RESET_STATE_USER}
}