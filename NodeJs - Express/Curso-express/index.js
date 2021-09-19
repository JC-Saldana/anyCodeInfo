// Importa módulo express y crea servidor
const express = require("express")
const morgan = require("morgan") // Para crear middleware ya preparado
const app = express()
const ejs = require('ejs');

// Middleware: manejador de petición desde cualquier ruta a ejecutar antes de llegar a su ruta
// Puede usarse por ejemplo para validar usuario antes de llevar a su petición
// Queda comentado porque lo sustituye morgan
/*
function logger(req, res, next) {
    console.log(`Route received: ${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next()
}
*/

//Settings
app.set("appName", "Express Tutorial")
app.set("port", 3000)
app.set("view engine", "ejs")

// Middlewares 
app.use(express.json()) // Procesa objeto request.body a JSON enviado desde chrome
app.use(morgan("dev")) // Morgan, para mostrar info de la petición

// Routes
// Manejador de petición desde ruta específica a ejecutar antes de llegar a su ruta
/*
app.all("/user", (req, res, next) => {
    console.log("Por aquí ha pasado")
    next()
})
*/

// Métodos crud
app.get("/", (req,res) => {
    const data = [{name: "john"}, {name: "joe"}, {name: "cameron"}, {name: "ryan"}]
    res.render("index.ejs", {people: data})
})

app.get("/user", (req, res) => {
    res.json({
        username: "Cameron",
        lastname: "Howe"
    })
})

app.post("/user/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send("Petición post recibida")
})

app.put("/user/:id", (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
})

app.delete("/user/:userId", (req, res) => {
    res.send(`User ${req.params.userId} deleted`)
})

// Middleware static incorporado ya con express, envía a public/index.html

app.use(express.static("public"))

// Indicar que servidor escuche en puerto
app.listen(app.get("port"), () => {
    console.log(app.get("appName"))
    console.log("Server on port", app.get("port"))
})