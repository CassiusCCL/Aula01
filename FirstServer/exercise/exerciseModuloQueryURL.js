var http = require('http'); //efetua o carregamento do modulo necessario
var url = require('url');
var circulo =  require('../circulo');

var server = http.createServer(function(request, response){
	console.log(request.url);
	response.writeHead(200, {'Content-Type': 'text/html'});

	var result = url.parse(request.url, true);         
	
    var raio = result.query.raio;

    response.write('A area do circulo e: ' + circulo.area(raio));

	response.end();
});

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})

