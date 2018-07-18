import { LOGIN, LOG_OUT } from '../actions/login'

export default function login(state = null, action){
    switch(action.type){
        case LOGIN :
            return action.userName
        case LOG_OUT :
            return ''

        default :
            return state
    }
}