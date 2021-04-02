const app = require("express")();
var path = require("path");
const axios = require('axios');
const { json } = require("express");
//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

app.get("/", (req, res) => {
	let peopleList = loadDoc();
	res.render("index", { people: peopleList }); //passing list of people to our index.hbs file.
});

// axios.get('')
//   .then(function (response) {
//     // console.log(response)
    
//   })

  
  function getData(){
    return axios.get('http://127.0.0.1:8000/CityList/')
  }
  
  let peo=Promise.all([getData()]).then(function(result){return result[0]});
  console.log(peo.then(result)=>{console.log(result)})
    // response["Access-Control-Allow-Origin"] = "*"
    // response["Access-Control-Allow-Origin"] = "GET"
   
  

app.listen(5000);
