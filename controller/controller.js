const express = require('express');

const Vaga = require('../model/vaga');

const qtdVaga = 10;
var listVagas = [];
for (var i = 0; i < qtdVaga; i++) {
	var vaga = {
		"id":i,
		"status":0, //0 Descupado 1 Ocupado 2 Reservado
		"timeEntrada":0
	};
	listVagas.push(vaga);
}

const router = express.Router();

router.get('/all', (req,res)=> {
	res.send(JSON.stringify(listVagas));
});     

router.post('/register', (req,res)=> {
	try{
		const vagaStr = JSON.stringify(req.body);
		var vaga = JSON.parse(vagaStr);
		var timeEntrada = (new Date).getTime();
		if (listVagas[vaga['id']]['status'] == 1) {
			return res.send({erro: 'Local ocupado'});		
		}
		for (var i = 0; i < qtdVaga; i++) {
			if(listVagas[i]['id'] == vaga['id']) {
				listVagas[i]['status'] = 2;
				listVagas[i]['timeEntrada'] = timeEntrada
			}
		}
		return res.send({vaga});
	}
	catch(err) {
		console.log(err);
		return res.status(400).send({erro: 'ERRO INTERNO'})
	}
});

router.post('/registerDispositivo', (req,res)=> {
	try {
		var timestamp = new Date().getTime();
		for (var i = 0; i < qtdVaga;i++) {
			var vaga = listVagas[i];			
			if (vaga['status'] == 2 ) {	// Vagas reservadas
				if (timestamp - vaga['timeEntrada'] >= 50000) {
					vaga['status'] = 0;
					vaga['timeEntrada'] = 0;
				}
			}
		}
		const coisaSTR = JSON.stringify(req.body); //id da vaga e status
		var coisa = JSON.parse(coisaSTR);
		listVagas[coisa['id']]['status'] = coisa['status'];
		return res.send({ok:'ok'})

	}catch(err){
		console.log(err);
		return res.status(400).send({erro: 'ERRO INTERNO'})
	}
});      

module.exports = app => app.use('/app', router);