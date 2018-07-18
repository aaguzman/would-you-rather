import { RECEIVE_QUESTIONS, VOTE, NEW_QUESTION } from '../actions/questions'

export default function question(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions,
            }
        case VOTE:
            {
                return {
                    ...state,
                    [action.qid]: {
                        ...state[action.qid],
                        [action.answer]: {
                            ...state[action.qid][action.answer],
                            votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                        } 
                    }
                }
            }

        case NEW_QUESTION:
            {
                return {
                    ...state,
                    [action.question.id]:action.question
                }
            }
        default :
            return state
    }


}