var http = require('http');
var faker = require('faker');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    var nomeFake = faker.name.findName();
    var imagemFake = faker.internet.avatar();
        
    response.write('Nome: ' + nomeFake + ' Imagem: <img src="' + imagemFake + '"/>');
    response.end();
})

server.listen(3000, function(){
	console.log("Server carregado na porta 3000");
})
