import axios from 'axios';


let parsedJsonData = localStorage.getItem("h0_ni128ehiond1289nsss");
export default axios.create({
  baseURL:"https://api.hology.my.id/",
  headers:{
      "Authorization" : "Bearer "+parsedJsonData
  }
})
