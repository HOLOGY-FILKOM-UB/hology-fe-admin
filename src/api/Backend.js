import axios from 'axios';

export default axios.create({
  baseURL:"https://hology-backend.herokuapp.com/api",
  header:{
      "Access-Control-Allow-Origin" : "*"
  }
})