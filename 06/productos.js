class Productos {
	productos = [
		{
			title: 'Drums',
			price: 1200,
			thumbnail:
				'https://cdn3.iconfinder.com/data/icons/kids-stuff/960/Drum_Instrument_Music_Percussion_Sticks-512.png',
			id: 1,
		},
		{
			title: 'Guitar',
			price: 800,
			thumbnail:
				'https://cdn3.iconfinder.com/data/icons/party-fill-recreation-story/512/Music-512.png',
			id: 2,
		},
        {
			title: 'Synth',
			price: 700,
			thumbnail:
				'https://cdn1.iconfinder.com/data/icons/piano-and-keyboard-set/96/piano_and_friend-11-512.png',
			id: 3,
		},
	];

	generateId() {
		const lastProduct = this.productos[this.productos.length - 1];
		console.log(lastProduct);
		let id = 1;
		if (lastProduct) {
			id = lastProduct.id + 1;
		}

		return id;
	}

	addProduct(newData) {
		newData.id = this.generateId();

		this.productos.push(newData);

		return this.productos;
	}

	getById(id) {
		return this.productos.find(product => product.id === parseInt(id));
	}

	update(id, data) {
		let updatedProduct;

		const updatedProducts = this.productos.map(product => {
			if (product.id === parseInt(id)) {
				product = Object.assign(product, data);

				updatedProduct = product;
			}
			return product;
		});

		this.productos = updatedProducts;

		return updatedProduct;
	}

	getAll() {
		return this.productos;
	}

	deleteById(id) {
		const newProducts = this.productos.filter(
			product => product.id !== parseInt(id)
		);

		this.productos = newProducts;

		return this.productos;
	}
}

module.exports = Productos;