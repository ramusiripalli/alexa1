'use strict';

var util = require('util');
var moment = require('moment');
var weather1 = require('weather-js');


module.exports = {
  login,weather
};


function login(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  /*var id = req.body.id;
  var password = req.body.password;
  var response = {};
  //console.log("id" + id);
  //console.log("password" + password);
  if (id == "ramu" && password == "12345") {
    response.status = "success";
  }
  else {
    response.status = "error";
  }

  res.json(response);
  */

 var inputDate = req.body.inputDate;
 inputDate= moment(inputDate,"DD/MM/YYYY").add(1,'year').add(2,'months').add(3,'days').add(4,'hours').format("dddd, MMMM Do YYYY, h:mm:ss a")
 var response = {};
 response.inputDate = inputDate;
 res.json(response);
}
function weather(req,res){

  weather1.find({search: 'Bengaluru, KA', degreeType: 'F'}, function(err, result) {
    if(err) {
      var response = "hello from weather. we are facing technical issue right now. please try again sometime";
    res.json(response);
      console.log(err);}
    else{
   
    //console.log(JSON.stringify(result, null, 2));
    //response.message = result[0].forecast[1];
    var day0weather = result[0].forecast[0].skytextday;
    console.log("todays weather " + day0weather);
    var day1weather = result[0].forecast[1].skytextday;
    console.log("tomorrows weather " + day1weather);
    var day2weather = result[0].forecast[2].skytextday;
    console.log("third day weather " + day2weather);
    var day3weather = result[0].forecast[3].skytextday;
    console.log("fourth day weather " + day3weather);
    var day4weather = result[0].forecast[4].skytextday;
    console.log("fifth day weather " + day4weather);
    var response = "Hello from weather. todays wheather is expected to be " + day0weather + ".Tomorrows weather will be " +day1weather + ".3rd weather will be " + day2weather + " .4th day weather will be " + day3weather + "5th day weather will be " + day4weather;
    res.json(response);
    //res.json(response);
    }
   
  });
  //res.json("hello");
}
