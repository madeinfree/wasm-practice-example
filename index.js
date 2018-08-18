const express = require('express');
const fs = require('fs');
const app = express();

app.get('/test.wasm', (req, res) => {
  const wasm = fs.readFileSync(__dirname + '/test.wasm');
  res.setHeader('Content-Type', 'application/wasm');
  res.status(200).send(wasm);
});

app.get('/wasm_exec.js', (req, res) => {
  const js = fs.readFileSync(__dirname + '/wasm_exec.js');
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(js.toString());
});

app.get('/', (req, res) => {
  const html = fs.readFileSync(__dirname + '/index.html');
  res.status(200).send(html.toString());
});
app.listen(8080, () => console.log('Server run on port 8080'));
