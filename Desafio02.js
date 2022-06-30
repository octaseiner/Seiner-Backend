const fs = require('fs');

class Contenedor {
    constructor() {
        this.id = undefined,
        this.title = undefined,
        this.price = undefined,
        this.thumbnail = undefined;
    }

    save = (title, price, thumbnail, obj) => {
        try {
            if (fs.existsSync('./productos.json')) {
                const data = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
                const lastProd = data[data.length - 1].id;
                this.title = title;
                this.price = price;
                this.thumbnail = thumbnail;
                this.id = lastProd + 1;
                data.push(obj);
                fs.writeFileSync('./productos.json', `${JSON.stringify(data)}`);
            } else {
                const array = [];
                this.title = title;
                this.price = price;
                this.thumbnail = thumbnail;
                this.id = 1;
                array.push(obj);
                fs.writeFileSync('./productos.json', `${JSON.stringify(array)}`);
            }

        } catch (error) {
            console.log(error);
        }

        console.log('Archivo guardado exitosamente');
    }


    getById = (id) => {
        const data = fs.readFileSync('./productos.json', 'utf-8')
        return ('getById', JSON.parse(data).find(x => x.id === id))
    }

    getAll = () => {
        const data = fs.readFileSync('./productos.json', 'utf-8')
        return data
    }

    deleteById =  (id) => {
        try {
            const data = fs.readFileSync('./productos.json', 'utf-8')
            const newArray = JSON.parse(data)
            const filteredArray = newArray.filter(x => x.id !== id)
            
            fs.writeFileSync('./productos.json', `${JSON.stringify(filteredArray)}`)
            console.log("Producto " + id + " eliminado exitosamente")
        } catch (error) {
            console.log(error)
        }
    }

    deleteAll = async () => {
        await fs.promises.writeFile('./productos.json', ``)
        console.log('Todos los productos fueron eliminados')
    }



}



    const contenedor = new Contenedor()
    contenedor.save('Escuadra', 123.45, 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png', contenedor);
    contenedor.save('Calculadora', 234.56, 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png', contenedor);
    contenedor.save('Globo Terráqueo', 345.67, 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',contenedor);

    contenedor.getAll();

    contenedor.getById(2);

    contenedor.deleteById(2);




    module.exports = Contenedor;