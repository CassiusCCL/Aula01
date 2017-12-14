var http = require('http'); //efetua o carregamento do modulo necessario
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log(request.url);

	fs.readFile(__dirname + '/index.html', function(err, html){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	});
});

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})

