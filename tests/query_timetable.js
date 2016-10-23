var Transdev = require("../scripts/Transdev");

var api = new Transdev();

api.getTimetable("255616-5","255616-HARUV1","25-11-2016","0",function(data){
	console.log(data);
});
