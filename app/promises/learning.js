let p = new Promise((resolveData, rejected) => {
	setTimeout(()=>{ resolveData("Resolved data")}, 3000);
});

// p.then(responseData => console.log(responseData))
// .catch(error => console.log(error));

// console.log("declared after promise but will called first.. that's asyncronus process");
