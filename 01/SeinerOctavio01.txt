class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames () {
        const nombresLibros = [];
        this.libros.map(function (libro) {
            nombresLibros.push(libro.nombre)
        })

        return nombresLibros
    }
}

const usuario = new Usuario("Juan", "Perez", [{nombre: "El señor de los anillos", autor: "Tolkien"}, {nombre: "Harry Potter", autor: "J. K. Rowling" }], ["Shuki", "Mikey"])

console.log(usuario.getFullName())

console.log(usuario.countMascotas())
usuario.addMascota("Toto")
console.log(usuario.countMascotas())

console.log(usuario.getBookNames())
usuario.addBook("Fundacion", "Isaac Asimov")
console.log(usuario.getBookNames())