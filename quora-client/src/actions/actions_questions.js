import {USER_ADD_QUESTION, USER_FETCH_QUESTION} from './../types'
import api from './../api/question_api'



export function addQuestionAction(data){
  return {
    type: USER_ADD_QUESTION,
    payload: data
  }
}

export function fetchQuestionAction(data){
  return {
    type: USER_FETCH_QUESTION,
    payload: data
  }
}






export const question1 = data => dispatch => {
  console.log(data)
  return api.user2.questionadd(data).then(data =>  {
    return dispatch(addQuestionAction(data))
  })
}


export const question2 = data => dispatch => {
  console.log(data)
  return api.user2.questionfetch(data).then(data =>  {
    return dispatch(fetchQuestionAction(data))
  })
}
