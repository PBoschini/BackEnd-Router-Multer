const express = require('express');
const app = express();
const PORT = 8080;
let serverRoutes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

serverRoutes(app);

app.listen(PORT, () => console.log(`https://localhost:${PORT}`));

