/* 
	data encapsultion is not supported by ES6 
	by default but we can acheive this by using 
	closures
*/

const budget = () => {
	// private variables
	let balance = 0;

	// core logic of function
	let balanceCheck = () => balance;
	const addBalance = (bal) => balance += bal;
	const withdrawBalance = (bal) => balance -= bal;

	// closures for outside use
	const deposite = (a) => addBalance(a)
	const check = () => balanceCheck();
	const withdraw = (a) => withdrawBalance(a)
	return { deposite, check, withdraw }
}

let wallet = budget();
console.log(wallet);
console.log(wallet.check());
console.log(wallet.deposite(10));
console.log(wallet.withdraw(5));
console.log(wallet.check());