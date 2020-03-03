import {USER_FETCH_QUESTION} from './../types.js'
export default function questionfetch (state = {question2: []}, action = {}){
  switch(action.type){
    case USER_FETCH_QUESTION:
      console.log(action.payload)
      return Object.assign({}, state, {question2 : action.payload});
      console.log(action.payload)

    default:
        return state;
  }
}
