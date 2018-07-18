export const LOGIN = 'LOGIN'
export const LOG_OUT = 'LOG_OUT'

export function login(userName){
    return {
        type: LOGIN,
        userName
    }
}

export function logOut () {
    return {
        type: LOG_OUT
    }
}

