const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

// utilizado para poder permitir a leitura de json
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);