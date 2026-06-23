const express = require("express")
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    res.status(200).send("Bem vindo à API")
})

app.listen(PORT, ()=>{
    console.log(`Servidor está rodando na porta ${PORT}`)
})