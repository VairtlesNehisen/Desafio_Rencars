const express = require('express');
const bodyParser = require('body-parser');
const veiculosRoutes = require('./src/controller/veiculosRoutes');
const sequelize = require('./src/config/database.js');

const app = express();
const port = 8080;

app.use(express.json());
app.use('/', veiculosRoutes);

sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta -->> ${port}`);
    });
});
