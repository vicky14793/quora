import { combineReducers } from 'redux';
import user from './reducer_auth'
//import book from './reducer_adpost'
import question from './reducer_questions'
import questionfetch from './reducer_questionfetch'
export default combineReducers({
  user,
  //book
  question,
  questionfetch
});
