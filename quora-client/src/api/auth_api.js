import axios from 'axios'
import {getHeader} from './../types.js'
const localUrl = 'http://localhost:5001'
export default {
  user1 : {
    signup : data =>
            axios.post(`${localUrl}/registration`, data).then(res => res.data),
    signin : data => axios.post(`${localUrl}/registration/signin`, data).then(res => res.data)
  }

}
