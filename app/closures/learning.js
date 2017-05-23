const call = () => {
	let msg = "I am the msg";
	const reviel = () => {
		console.log(msg);
	}
	return reviel;
}

let revielMsg = call();
// revielMsg();

const add5 = (a) => {
	const y = (b) => {
		return a + b;
	}	
	return y;
}

let addFun = add5(5);
// console.log(addFun(10));

const multipleOf5 = (a) => (b) => a*b; // one line function

let multFun = multipleOf5(5);
// console.log(multFun(10));