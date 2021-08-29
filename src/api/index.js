import axios from 'axios';


let parsedJsonData = localStorage.getItem("h0_ni128ehiond1289n");
export default axios.create({
  baseURL:"https://api.hology.my.id/",
  headers:{
      "Access-Control-Allow-Origin" : "*",
      "Authorization" : "Bearer "+parsedJsonData
  }
})
