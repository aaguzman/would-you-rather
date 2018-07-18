import { saveNewQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE = 'VOTE'
export const NEW_QUESTION  = 'NEW_QUESTION'


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function vote (answer) {
    return (dispatch) => {
        return saveQuestionAnswer(answer)
            .then(()=>
                dispatch(saveVote(answer))
            )
    }
}

export function saveVote({authedUser, qid, answer}) {
    return {
        type: VOTE,
        authedUser,
        qid,
        answer
    }
}


export function newQuestion (question){
    return {
        type: NEW_QUESTION,
        question
    }
}

export function saveQuestion (question) {
  return (dispatch,getState) => {
      const { login } = getState()
      return saveNewQuestion({
          ...question,
          author: login
      }).then((responceQuestion) =>
        dispatch(newQuestion(responceQuestion))        
)
  }
}
