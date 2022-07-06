const express = require('express')
const router = express.Router()
const Products = require("./productos")

const PORT = 8080

const app = express()

app.use(express.urlencoded({extended: true}))
app.use('/api/products', router)
app.use(express.static("./public"))

const productos = new Products()

router.get("/", (req, res) => {
    try {
        res.status(200).json(productos.productsAll) 
    }catch(e){
        res.status(500).json(e.message) 
    }
})

router.get("/:idProduct", (req, res) => {
    try {
        const product = productos.getProductById(req.params.idProduct)
        if(product){
            return res.status(200).json(product)
        } 
        return res.status(200).json({error: "producto no encontrado"})
    }catch(e){
        res.status(500).json(e.message)
    }
})

router.post("/", (req, res) => {
    try {
        if(req.body.title && req.body.price){
            const product = productos.saveProduct(req.body)
            res.status(201).json(product)  
        }else{
            res.status(400).json({error: "Complete los datos obligatorios"})  
        }
    }catch(e){
        res.status(500).json(e.message)
    }
})

router.put("/:idProduct", (req, res) => {
    try {
        const id = Number(req.params.idProduct)
        const producto = productos.update(id, req.body)
        res.status(200).json(producto)
    }catch(e){
        res.status(`No se pudo editar ${e.message}`)
    }
})

router.delete("/:idProduct", (req, res) => {
    try {
        const id = Number(req.params.idProduct);
        productos.deleteById(id);
        res.status(200).json("Borrado")
    }catch(e){
        res.status(500).json({error: `No se pudo borrar el producto ${e.message}`})
    }
})

const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on("error", (e) => console.log(e.message))