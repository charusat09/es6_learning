// // set

// let num = new Set();
// num.add(5);
// num.add("My name");
// num.add({a: 5})
// num.add(5)

// // console.log(num);
// // console.log(num.size);
// // console.log(num.has(10));

// let numbers = [1,2,3,4,5];
// let numSet = new Set(numbers);

// // console.log(numSet);
// for(let element of numSet.values()) {
// 	// console.log(element);
// }

// let str = "fdfdfasdasdsadsadsad";
// let strArr = str.split("");
// let strSet = new Set(strArr);

// // console.log(strSet);	

// // map

// let key1 = "key 1";
// let key2 = { a: 15};
// let key3 = function(){};

// let map = new Map();
// map.set(key1, "string");
// map.set(key2, "object");
// map.set(key3, "function");

// console.log(map);

// let string = "ejhsdjkhfjkhdjfjlnHLWJ;ckjWKl;ej c";
// let strMap = new Map();

// for(let i=0; i<string.length; i++){
// 	let letter = string[i];
// 	if(!strMap.has(letter)) {
// 		strMap.set(letter, 1);
// 	} else {
// 		strMap.set(letter, strMap.get(letter) + 1);
// 	}
// }

// console.log(strMap);

// let nums = [[1, "one"], [2, "two"]];
// let numsMap = new Map(nums);
// console.log(numsMap);

// for(let elem of numsMap.entries()){
// 	console.log(elem);
// }