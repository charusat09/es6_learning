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

templateLiterals();