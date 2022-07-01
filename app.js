const express = require('express');
const app = express();
const path = require('path');
const citiesRouter = require('./routes/citiesRoute');
const mongoose = require('mongoose');

const PORT = 3000;
const colectionNameDB = 'project'

mongoose.connect(`mongodb://localhost/${colectionNameDB}`)
let db = mongoose.connection
db.on('error', () => {console.log('Erro ao tentar conectar ao db')})
db.once('open', () => {console.log('Banco carregado com sucesso!')})

app.use('/cities', citiesRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Servidor Rodando na Porta: ${PORT}`);
});