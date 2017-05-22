class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}

	hello() {
		console.log(`Hi I'm ${this.name} from Jungle`);
	}
}

// let king = new Animal("Taison", 4.5);
// king.hello();

export default Animal;