var http = require('http'); //efetua o carregamento do modulo necessario
var circulo = require('./circulo');

var server = http.createServer(function(request, response){
    
    console.log(circulo.area(4));

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write('<p>A area do circulo e: ' + circulo.area(4) + '</p>');

	response.end();
});

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})
