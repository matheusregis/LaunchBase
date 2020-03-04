const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const projects = require ("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    const about = {
        avatar_url: "/img/matheus-400x400.png",
        name: "Matheus Régis",
        role: "Programador FullStack",
        description: 'Estudante do Curso de Ciência da Computação - <a href="https://videira.ifc.edu.br/" target="_blank">IFC Videira</a>',
        links: [
            { name: "Facebook", url: "https://www.facebook.com/matheus.regis.902" },
            { name: "Github", url: "https://github.com/matheusregis" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/matheustrai/" },
            { name: "Twitch", url: "http://twitch.tv/escadatrai" }
        ]
    }

    return res.render("about", { about })
})

server.get("/projects", function(req, res) {
    return res.render("projects", { items: projects })
})

server.listen(5000, function() {
    console.log("server is running")
})