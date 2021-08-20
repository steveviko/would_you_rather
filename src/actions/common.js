import { getInitialData,saveQuestionAnswer } from '../utils/helper';
import { receiveUsers,userAnswerQuestion } from './users';
import { receiveQuestions,answerQuestion } from './questions';
import { initAuthedUser } from './authedUser';


export function handleInitialData () {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(initAuthedUser(null))
      })
  }
}

export function handleAnswerQuestion (info) {
  return(dispatch) => {
    return saveQuestionAnswer(info)
    .then(() => {
      dispatch(userAnswerQuestion(info))
      dispatch(answerQuestion(info))
    })
    .catch((e) => {
      alert('An error occured during the answering of this question. Try again.')
    })
  }
}