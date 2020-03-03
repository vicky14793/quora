import axios from 'axios'
import {getHeader} from './../types.js'
const localUrl = 'http://localhost:5001'
export default {
  user2 : {
    questionadd : data =>
            axios.post(`${localUrl}/questions`, data).then(res => res.data),

    questionfetch : data =>
            axios.get(`${localUrl}/questions/fetch`, data).then(res => res.data)
  }
   
}
