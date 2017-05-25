// function* arrayIterator(){
// 	for(let arg of arguments){
// 		yield arg;
// 	}
// }

function* arrayIterator(){yield* arguments}

let arr = arrayIterator(1,2,3);
// console.log(arr.next().value)
// console.log(arr.next().value)
// console.log(arr.next().value)
// console.log(arr.next().value)