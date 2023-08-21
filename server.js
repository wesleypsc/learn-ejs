//Criando um servidor express
const express = require("express")
const app = express();

/* Setando a View Engine como EJS
 * Isso fala para o Express, que o método de renderização será o EJS, 
 * assim o servidor consegue ler e entregar corretamente o arquivo ejs para o navegador.
 * */
app.set("view engine", "ejs")

/* Criando uma rota para a raiz do app
 * - Não é necessário inserir a extensão .ejs pois o server já sabe que estamos utilizando o EJS
 * */
app.get("/", function(req, res){
    res.render("index")
})

app.get("/sobre", function(req, res){
    res.render("about")
})

app.listen(8080)
console.log("It's alive")