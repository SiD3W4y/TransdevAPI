

exports.process = function(data,callback){
var lines = data.split("\n");

for(var i=0;i<lines.length;i++){
	var records = lines[i].split("|");
	if(records[0] != ""){
		callback(records);
	}
}
}
