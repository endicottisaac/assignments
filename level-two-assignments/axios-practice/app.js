//app.js

const axios = require("axios");


  axios.delete('https://api.vschool.io/endicottisaac/todo/64c4809b78fe452c1149d836').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });