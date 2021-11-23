const express = require("express");
const app = express();
const port = 8000;

const Usuario = require('./Usuario');
const Empresa = require('./Empresa');

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json( { user: new Usuario() } );
});

app.get("/api/companies/new", (req, res) => {
    res.json( { company: new Empresa() } );
});

app.get("/api/user/company", (req, res) => {
    res.json( { user: new Usuario(), company: new Empresa() } );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );