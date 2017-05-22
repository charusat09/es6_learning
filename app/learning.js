function letAndCost(){	
	let limit = 100;
	const absLimit = 100;
	limit = 200;
	console.log("Limit ----- " + limit);
	console.log("Absolute Limit ---- " + absLimit)

	const ids = [1,2,3]
	console.log(ids);
	ids.pop();
	console.log(ids)

	// block scope

	function hello(){
		let message = "Hello";
		const limit = 300;
		// limit = limit + 100; // this will throw an error
		console.log(message + " " + limit);
	}

	function greetings(){
		let message = "how are you";
		const limit = 1000;
		console.log(message + " " + limit);
	}

	hello();
	greetings();

};

// letAndCost();


// template literals or template string

function templateLiterals(){
	let car = "Mercedes";
	let myCar = `${car} Benz`;
	console.log(myCar);
}

// templateLiterals();

// spread operator and rest parameter

function spreadRest(){
	let name = ["firstname", "lastname"];
	let bio = [...name, "address"];
	console.log(bio);

	// rest parameter
	function fullBio(...fullname) {
		let addressWithName = [...fullname, "address"]; 
		let addressWithNameArray = [fullname, "address"];
		console.log(addressWithName); // ["firstname", "lastname", "address"]
		console.log(addressWithNameArray); // [Array(2), "address"]

	}
	fullBio("firstname", "lastname");
};

// spreadRest();

// destruction operator

function destruction() {
	let cars = ["Benz", "Royal", "Audi"];
	let [myFirstCar, mySecondCar] = cars;
	console.log(myFirstCar, mySecondCar);

	let fruit = { name: "Mango", season: "Summer"};
	let { name, season } = fruit;
	console.log(name, season);

	let mobile = { make: "2016", company: "i7"};
	let make, company;
	({ make, company } = mobile);
	console.log(make, company);
}

// destruction();

// arrow function
let arrowFunction = () => {
	let cheers = () => { console.log("wooooooooo")};
	cheers();

	// filter function
	let ids = [1,2,3,4,5,6];
	let moreThanThree = (n) => { 
		return n > 3
	}

	let selectedIds = ids.filter(moreThanThree);
	console.log(selectedIds);

	// map function
	let double = (n) => { return n*2 };
	console.log(ids.map(double)); // pass anonymous function
	console.log(ids.map((n) => n * 5)); // shorthand form for anonymous function
	console.log(
		ids.
		filter(moreThanThree).
		map(double)
	);
}

// arrowFunction();

// helpers methods
let helpersMethods = () => {
	let str = "Hey";
	let calling = `${str} ${'y'.repeat(50)} Mayur`;
	console.log(calling);
	let name = "firstname";
	console.log(name.startsWith("fir"));
	console.log(name.endsWith("me"));
	console.log(name.includes("hh"));
	const addToCart = (number) => {
		let isFinite = Number.isFinite(number);
		let isSafeInteger = Number.isSafeInteger(number);	
		console.log(isFinite, isSafeInteger);		
	}
	addToCart(Math.pow(2, 54)); // true false
	addToCart(2); // true true
	addToCart("two"); // false false
}

// helpersMethods();

import { add, multiply } from './math';
import info from './math';
// import will not work in the fuctions

let importExport = () => {

	console.log(multiply(2, 6));
	console.log(info.name);

	// let add = (a, b) => { return a + b + 1}; // will raise error of duplication

	console.log(add(5, 10));
}

// importExport();