const express = require("express");
const app = express();

let fs = require('fs');

//Evitando conflicto con CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Lectura de Archivos JSON
let rawdataS = fs.readFileSync('symbols.json');
const symbols = JSON.parse(rawdataS);
let rawdataH = fs.readFileSync('historical.json');
const historical = JSON.parse(rawdataH);

//Rutas de Acceso
app.get('/api/symbols/', function (req, res) {
  res.send(symbols);
});
app.get('/api/historical', function (req, res) {
  res.send(historical);
});

//Rutas con Parámetros
app.get('/api/symbols/:symbol', function (req, res) {
  const symbolAsked = req.params.symbol;
  const response = symbols.symbolsList.filter((x) => x.symbol === symbolAsked);
  res.send(response[0]);
});

app.get('/api/historical/:symbol', function (req, res) {
  const symbolAsked = req.params.symbol;
  const response = historical.historicalStockList.filter((x) => x.symbol === symbolAsked);
  res.send(response[0]);
});

//Error 404
app.get('*', function(req, res){
  res.send('Not Found', 404);
});

//Configuración de Puerto

app.listen(9090, () => {
  console.log("Server started at port 9090");
});