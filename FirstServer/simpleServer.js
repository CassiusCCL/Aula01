var http = require('http'); //efetua o carregamento do modulo necessario

var server = http.createServer(function(request, response){
	console.log(request.url);
	response.writeHead(200, {'Content-Type': 'text/html'});
	if(request.url === "/"){
		response.write('<h1>Pagina Inicial</h1>');
	}else if(request.url === "/sobre"){
		response.write('<h1>Sobre</h1>');
	}else{
		response.write('<h1>Pagina nao encontrada!</h1>')
	}

	response.end();
});

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})

