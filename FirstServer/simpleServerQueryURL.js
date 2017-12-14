var http = require('http'); //efetua o carregamento do modulo necessario
var url = require('url');

var server = http.createServer(function(request, response){
	console.log(request.url);
	response.writeHead(200, {'Content-Type': 'text/html'});

	var result = url.parse(request.url, true);         
	
	for(var key in result.query){    
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");  
	}

	console.log(result);

	response.end();
});

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})

