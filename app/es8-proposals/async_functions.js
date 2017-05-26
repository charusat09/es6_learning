async function async_one() {
	return "one";
}

async function async_two(){
	return "two";
}

async function async_three(){
	const one = await async_one();
	console.log(one);
	const two = await async_two();
	console.log(two);
}

// async_three();

async function all_promises() {
	const [one, two] = await Promise.all(
		[async_one(), async_two()]
	)
	console.log(one, two);
}

// all_promises();

async function throw_error(){
	throw new Error("this is an error");
}

// async_one().
// 	then(responce=> console.log(responce));
// throw_error().catch(error => console.log(error));