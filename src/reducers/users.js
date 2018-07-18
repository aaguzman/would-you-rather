import { RECEIVE_USERS } from '../actions/users'
import { VOTE, NEW_QUESTION } from '../actions/questions'
export default function user (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }

        case NEW_QUESTION:
            const { question } =  action
            return {
                ...state,
                [question.author]:{
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }

        case VOTE :
            return {
                ...state, 
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
                
            }
        default :
            return state
    }
}