import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { login } from '../actions/login'

const user = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,questions}) =>{
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(login(user))
            })
    }
}