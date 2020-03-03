import {USER_ADD_QUESTION} from './../types.js'
export default function question (state = {question1:  {category:'', description: ''}}, action = {}){
  switch(action.type){
    case USER_ADD_QUESTION:
      return Object.assign({}, state, {question1 : action.payload});
      console.log(action.payload)

    default:
        return state;
  }
}
