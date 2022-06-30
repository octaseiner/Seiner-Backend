const express = require("express");
const app = express();

const contenedor = require("./Desafio02")

app.get("/productos", async (req, res) => {
    const archivoProductos = new contenedor('productos.json');

	const productos = await archivoProductos.getAll();

	res.json(productos);
})

app.get("/productosRandom", async (req, res) => {
    const archivoProductos = new contenedor('productos.json');

	const productos = await archivoProductos.getAll();

	const random = Math.floor(Math.random() * productos.length);

	res.json(productos[random]);
})



const PORT = 8080;

const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en el servidor ${error}`));