const http = require('http')
const port = 3000
const ip = 'localhost'
/*
var fs = require('fs');
fs.readFile('teste.txt', function(err,data){
	if (err) {
		console.log("ERRO AO ABRIR O ARQUIVO");
		process.exit(1);
	}
	console.log(data.toString());
});
*/
const server = http.createServer((req, res) => {
  if (req.url == '/' || req.url == ''){
  	
  }
  res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})