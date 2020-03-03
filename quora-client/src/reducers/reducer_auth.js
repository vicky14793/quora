import {USER_SIGN_UP, USER_SIGN_IN} from './../types.js'

export default function user (state = {user1:  {Firstname: '', Lastname: '',  email: '', password: '', phone: ''}}, action = {})
{
  switch(action.type){
    case USER_SIGN_UP:
      return Object.assign({}, state, {user1 : action.payload});

    case USER_SIGN_IN:
      return Object.assign({}, state, {success : true}, {token: action.payload});


    default:
        return state;
  }
}
