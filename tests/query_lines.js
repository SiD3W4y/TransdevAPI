var Transdev = require("../scripts/Transdev");

var api = new Transdev();

api.getLines(5,function(data){
	console.log(data);
});
