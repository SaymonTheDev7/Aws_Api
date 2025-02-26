const express = require('express'); 
const cors = require('cors');
const router = require('./Routes/routes');

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

app.listen(8081,() => {
    console.log("API Rodando");
})
