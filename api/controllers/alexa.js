'use strict';

var util = require('util');


module.exports = {
  login
};


function login(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

 
  res.json(hello);
}
