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
    const items = [
        {
        title: "D", 
        message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
        title: "E", 
        message: "JS usa JS para renderizar HTML"
        },
        {
        title: "M", 
        message: "uito mais fácil de usar"
        },
        {
        title: "A", 
        message: "gil e versátil"
        },
        {
        title: "I", 
        message: "nstall JS"
        },
        {
        title: "S", 
        message: "Sintaxe simples"
        }
    ]

    const description = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"

    res.render("pages/index", {
        qualities: items, 
        description: description
    })
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})

app.listen(8080)
console.log("Running...")