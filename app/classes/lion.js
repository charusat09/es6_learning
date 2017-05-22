import Animal from './animal.js'
import Calculator from './calculator.js'

class Lion extends Animal {
	constructor(name, height, color) {
		super(name, height);
		this.color = color;
	}

	hello() {
		console.log(`Hi I'm ${this.name}\nfrom another Jungle and my color is ${this.color}`);
	}
}

let lion = new Lion("Simba", 2, "golden");
// lion.hello();


let ans = Calculator.add(5, 10);
// console.log(ans);

let ans1 = Calculator.multiply(5, 10);
// console.log(ans1);