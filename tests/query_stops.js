var Transdev = require("../scripts/Transdev.js");

var api = new Transdev();

api.getStops("255616-5","0",function(data){
console.log(data);
});
