console.log(typeof document);
// var a = document.getElementById('demo').innerHTML = 'JS Learning';
// console.log(a);

var print = function() {
	console.log("printing.......");
}

print();

var car = {
	name: "Benz",
	make: "2017",
	cylinder: "4",
	start: function() {
		console.log("wait, it is starting.......");
	}
}

console.log(car.name);

var arr = [1,2,3,4,5]
arr.push(6);
var last = arr.pop();
var first = arr[0];
console.log(arr, first, last);

var carInqury = function(name) {
	if (car.name == name) {
		console.log("wow!!! It's Benz");
		car.start();
	} else {
		console.log("No man, it's not Benz");
	}
}

carInqury(car.name);

var weatherQuery = function(temperature) {
	switch(temperature) {
		case 25:
			console.log("It's cool weather ....");
			break;
		case 35:
			console.log("Meadium heat there");
			break;
		case 42:
			console.log("Tooooo hot there");
			break;
		default:
			console.log("weather dept is on leave");
			break;
	}
}

weatherQuery(30);
weatherQuery(35);

for(i = 0; i < 10; i++) {
	console.log(i);
}

console.log("--------------------")

var i = 0;
while(i < 10) {
	console.log(i);
	i++;
}

var j = 0;

do {
	console.log("getting j " + j);
	i++;
} while (j < 0)

var getOddEven = function(number) {
	var arr = [];
	if (number % 2 == 0) {
		for(i = 0; i < number; i +=2) {
			arr.push(i);
		}
	} else {
		for(i=1; i < number; i +=2) {
			arr.push(i);
		}
	}
	console.log("I got array of numbers: " + arr);
}

getOddEven(25);
getOddEven(20);