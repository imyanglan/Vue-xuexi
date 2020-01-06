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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_info__ = __webpack_require__(2);
//在这里导入
// 1.使用commonJS的模块化规范
const {add,mul}=__webpack_require__(1);
console.log(add(20, 30));
console.log(mul(20, 30));
// 现在就是以模块化的想法用我们的代码


// 2.使用ES6的模块化规范
// 我们来看看这样调用，通过webpack能不能使用

// 它会自动跳出后面的代码 而且在这里面我们不用写.js webpack它会自动帮我们找到这个文件，
// 在前面前端模块化调用的时候我们需要加上.js浏览器才会解析

console.log(__WEBPACK_IMPORTED_MODULE_0__js_info__["c" /* name */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__js_info__["a" /* age */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__js_info__["b" /* height */]);

// 这里我们写完之后还需要重新再打包一次

// 3.依赖css文件      把它也当成一个模块 通过require去加载这个模块
__webpack_require__(3)
// 这里我们也不需要写变量，我们在上面写变量的原因是之后要用到，而样式我们只需要依赖就行了
// 如果我们直接打包的话，会报错，因为webpack不能直接对css文件进行解析，我们需要通过合适的loader
// 对该文件进行处理  我们去到官网里可以直接看如何使用合适的loader

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function add(num1,num2) {
  return num1+num2
}

function mul(num1,num2) {
  return num1*num2
}

// 我们用模块化的思想来做这个
// 第一我们用commonJS来做
// 我们在这里给它导出
module.exports={
  add,
  mul
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const name='imyanglan'
/* harmony export (immutable) */ __webpack_exports__["c"] = name;

const age=18
/* harmony export (immutable) */ __webpack_exports__["a"] = age;

const height=158
/* harmony export (immutable) */ __webpack_exports__["b"] = height;


// 这里我们用ES6的模块化   再去main.js里引入这些代码

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: D:\\WebStorm\\Vue-xuexi\\LearnVuejs\\Day5-1（webpack的使用）\\03-webpack的loader\\src(源码-开发的东西都放这里)\\css\\normal.css Unexpected token (1:4)\nYou may need an appropriate loader to handle this file type.\n| body{\r\n|     background-color: red;\r\n| }");

/***/ })
/******/ ]);