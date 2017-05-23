function* idMaker() {
	let id = 0;
	while(id >= 0) {
		let reset = yield id +=1;
		if(reset) { id = 0};
	}
}

let idGen = idMaker();
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next(true).value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);
// console.log(idGen.next().value);


/*
	Generators break the typical "run to completion" model of the normal functions and
	they can start, pause and reset.
	Yield signals when to pause the flow.
*/