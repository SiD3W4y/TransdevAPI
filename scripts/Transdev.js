var http = require("http");
var utils = require("./utils");


var Transdev = module.exports = function(){
	this.endpoint = "http://www.transdev-idf.com/ip/";
}


Transdev.prototype.get  = function(url,callback){
	var request = http.get(url,function(resp){
		var data = "";
		resp.on("data",function(d){data+=d;});
		resp.on("end",function(){callback(data);});
	});
}


Transdev.prototype.getStops = function(cityid,direction,callback){
	var req = this.endpoint+"schema/"+cityid+"/"+direction;
	this.get(req,function(data){
		
		var stops = [];
		
		utils.process(data,function(record){
			stops.push({"id":record[0],"name":record[1]});			
		});

		callback(stops);
	});
}

Transdev.prototype.getLines = function(nbr,callback){
	var url = this.endpoint+"lines_2?n="+nbr;
	this.get(url,function(data){
		var lines = [];

		utils.process(data,function(record){
			lines.push({
			"region": record[0],
			"id": record[2],
			"fromstop": record[5],
			"fromcity": record[6],
			"tostop": record[7],
			"tocity": record[8]
			});
		});

		callback(lines);
	});
}

Transdev.prototype.getTimetable = function(cityid,stopid,date,direction,callback){
	var url = this.endpoint+"station_timetable/"+cityid+"/"+stopid+"/"+direction+"/"+date;

	this.get(url,function(data){
		var times = [];

		utils.process(data,function(record){
			var hour = record[0];

			for(var i=1;i<record.length;i++){
				times.push(hour+":"+record[i]);
			}
		});

		callback(times);
	});
}

