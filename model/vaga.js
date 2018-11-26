const mongoose = require('../database/conect');

const VagaSchema = new mongoose.Schema({
    nome:{
    	type: String,
    	require: true,
    },
    id:{
        type: String,
    },
    state:{
        type: Boolean,
    },
    createdAt: {
    	type: Date,
    	defaul: Date.now,
    },
})
    


const Vaga = mongoose.model('Vaga',VagaSchema);

module.exports = Vaga;
