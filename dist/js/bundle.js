/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
	function Calculator() {
		_classCallCheck(this, Calculator);
	}

	_createClass(Calculator, null, [{
		key: "add",
		value: function add(a, b) {
			return a + b;
		}
	}, {
		key: "multiply",
		value: function multiply(a, b) {
			return a * b;
		}
	}]);

	return Calculator;
}();

exports.default = Calculator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animal = __webpack_require__(7);

var _animal2 = _interopRequireDefault(_animal);

var _calculator = __webpack_require__(0);

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lion = function (_Animal) {
	_inherits(Lion, _Animal);

	function Lion(name, height, color) {
		_classCallCheck(this, Lion);

		var _this = _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).call(this, name, height));

		_this.color = color;
		return _this;
	}

	_createClass(Lion, [{
		key: 'hello',
		value: function hello() {
			console.log('Hi I\'m ' + this.name + '\nfrom another Jungle and my color is ' + this.color);
		}
	}]);

	return Lion;
}(_animal2.default);

var lion = new Lion("Simba", 2, "golden");
// lion.hello();


var ans = _calculator2.default.add(5, 10);
// console.log(ans);

var ans1 = _calculator2.default.multiply(5, 10);
// console.log(ans1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* 
	data encapsultion is not supported by ES6 
	by default but we can acheive this by using 
	closures
*/

var budget = function budget() {
	// private variables
	var balance = 0;

	// core logic of function
	var balanceCheck = function balanceCheck() {
		return balance;
	};
	var addBalance = function addBalance(bal) {
		return balance += bal;
	};
	var withdrawBalance = function withdrawBalance(bal) {
		return balance -= bal;
	};

	// closures for outside use
	var deposite = function deposite(a) {
		return addBalance(a);
	};
	var check = function check() {
		return balanceCheck();
	};
	var withdraw = function withdraw(a) {
		return withdrawBalance(a);
	};
	return { deposite: deposite, check: check, withdraw: withdraw };
};

var wallet = budget();
console.log(wallet);
console.log(wallet.check());
console.log(wallet.deposite(10));
console.log(wallet.withdraw(5));
console.log(wallet.check());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = function call() {
	var msg = "I am the msg";
	var reviel = function reviel() {
		console.log(msg);
	};
	return reviel;
};

var revielMsg = call();
// revielMsg();

var add5 = function add5(a) {
	var y = function y(b) {
		return a + b;
	};
	return y;
};

var addFun = add5(5);
console.log(addFun(10));

var multipleOf5 = function multipleOf5(a) {
	return function (b) {
		return a * b;
	};
}; // one line function

var multFun = multipleOf5(5);
console.log(multFun(10));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _math = __webpack_require__(8);

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function letAndCost() {
	var limit = 100;
	var absLimit = 100;
	limit = 200;
	console.log("Limit ----- " + limit);
	console.log("Absolute Limit ---- " + absLimit);

	var ids = [1, 2, 3];
	console.log(ids);
	ids.pop();
	console.log(ids);

	// block scope

	function hello() {
		var message = "Hello";
		var limit = 300;
		// limit = limit + 100; // this will throw an error
		console.log(message + " " + limit);
	}

	function greetings() {
		var message = "how are you";
		var limit = 1000;
		console.log(message + " " + limit);
	}

	hello();
	greetings();
};

// letAndCost();


// template literals or template string

function templateLiterals() {
	var car = "Mercedes";
	var myCar = car + " Benz";
	console.log(myCar);
}

// templateLiterals();

// spread operator and rest parameter

function spreadRest() {
	var name = ["firstname", "lastname"];
	var bio = [].concat(name, ["address"]);
	console.log(bio);

	// rest parameter
	function fullBio() {
		for (var _len = arguments.length, fullname = Array(_len), _key = 0; _key < _len; _key++) {
			fullname[_key] = arguments[_key];
		}

		var addressWithName = [].concat(fullname, ["address"]);
		var addressWithNameArray = [fullname, "address"];
		console.log(addressWithName); // ["firstname", "lastname", "address"]
		console.log(addressWithNameArray); // [Array(2), "address"]
	}
	fullBio("firstname", "lastname");
};

// spreadRest();

// destruction operator

function destruction() {
	var cars = ["Benz", "Royal", "Audi"];
	var myFirstCar = cars[0],
	    mySecondCar = cars[1];

	console.log(myFirstCar, mySecondCar);

	var fruit = { name: "Mango", season: "Summer" };
	var name = fruit.name,
	    season = fruit.season;

	console.log(name, season);

	var mobile = { make: "2016", company: "i7" };
	var make = void 0,
	    company = void 0;
	make = mobile.make;
	company = mobile.company;

	console.log(make, company);
}

// destruction();

// arrow function
var arrowFunction = function arrowFunction() {
	var cheers = function cheers() {
		console.log("wooooooooo");
	};
	cheers();

	// filter function
	var ids = [1, 2, 3, 4, 5, 6];
	var moreThanThree = function moreThanThree(n) {
		return n > 3;
	};

	var selectedIds = ids.filter(moreThanThree);
	console.log(selectedIds);

	// map function
	var double = function double(n) {
		return n * 2;
	};
	console.log(ids.map(double)); // pass anonymous function
	console.log(ids.map(function (n) {
		return n * 5;
	})); // shorthand form for anonymous function
	console.log(ids.filter(moreThanThree).map(double));
};

// arrowFunction();

// helpers methods
var helpersMethods = function helpersMethods() {
	var str = "Hey";
	var calling = str + " " + 'y'.repeat(50) + " Mayur";
	console.log(calling);
	var name = "firstname";
	console.log(name.startsWith("fir"));
	console.log(name.endsWith("me"));
	console.log(name.includes("hh"));
	var addToCart = function addToCart(number) {
		var isFinite = Number.isFinite(number);
		var isSafeInteger = Number.isSafeInteger(number);
		console.log(isFinite, isSafeInteger);
	};
	addToCart(Math.pow(2, 54)); // true false
	addToCart(2); // true true
	addToCart("two"); // false false
};

// helpersMethods();

// import will not work in the fuctions

var importExport = function importExport() {

	console.log((0, _math.multiply)(2, 6));
	console.log(_math2.default.name);

	// let add = (a, b) => { return a + b + 1}; // will raise error of duplication

	console.log((0, _math.add)(5, 10));
};

// importExport();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Wizard(name, application, os) {
	this.name = name;
	this.application = application;
	this.os = os;

	this.info = function () {
		console.log("this is " + name + " used for " + application + " with " + os);
	};
}

Wizard.prototype.RAM;
Wizard.prototype.system_config = function () {
	console.log("this is " + this.name + " wizard runs with " + this.RAM + " system");
};

var wizard = new Wizard("play", "vlc", "ubuntu");
wizard.RAM = "2 GB";

// console.log(wizard);
// wizard.info();
// wizard.system_config();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
	function Animal(name, height) {
		_classCallCheck(this, Animal);

		this.name = name;
		this.height = height;
	}

	_createClass(Animal, [{
		key: "hello",
		value: function hello() {
			console.log("Hi I'm " + this.name + " from Jungle");
		}
	}]);

	return Animal;
}();

// let king = new Animal("Taison", 4.5);
// king.hello();

exports.default = Animal;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var add = function add(a, b) {
	return a + b;
};
var multiply = function multiply(a, b) {
	return a * b;
};
var info = {
	name: "Math Module",
	created_by: "Mayur Patel"
};

exports.add = add;
exports.multiply = multiply;
exports.default = info;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(6);
__webpack_require__(5);
__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);