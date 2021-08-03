//https://hology-api.herokuapp.com/
import axios from 'axios';

export default axios.create({
  baseURL:"https://hology-api.herokuapp.com/",
  header:{
      "Access-Control-Allow-Origin" : "*"
  }
})