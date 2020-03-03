import {USER_SIGN_UP, USER_SIGN_IN} from './../types'
import api from './../api/auth_api'



export function registerAction(data){
  return {
    type: USER_SIGN_UP,
    payload: data
  }
}

export function signinAction(data) {
  return {
    type: USER_SIGN_IN,
    payload: data
  }
}




export const register1 = data => dispatch => {
  //console.lo(data)
  return api.user1.signup(data).then(data =>  {
    return dispatch(registerAction(data))
  })
}

export const signin1 = data => dispatch => {
  //console.log(data)
  return api.user1.signin(data).then(data =>  {
    return dispatch(signinAction(data))
  })
}
