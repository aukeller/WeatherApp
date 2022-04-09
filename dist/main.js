/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/WeatherModule.js":
/*!******************************!*\
  !*** ./src/WeatherModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeatherModule)\n/* harmony export */ });\nfunction WeatherModule() {\n    async function getAPIData(location) {\n        const APIKey = 'e5f7be41d958d90ca7cb6387141e813e';\n        \n        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`, {mode: 'cors'});\n        const responseData = await response.json();\n    \n        return responseData;\n    }\n\n    function getWeatherData(responseData, unit) {\n        let temp = responseData.main.temp;\n        const main = responseData.weather[0].id;\n        const desc = responseData.weather[0].description;\n    \n        if (unit == \"F\") {\n            temp = convertToF(temp);\n        } else {\n            temp = convertToC(temp);\n        }\n        \n        return {\n            temperatue: temp,\n            description: desc,\n            main: main,\n        }\n    }\n\n    const convertToF = (temp) => {\n        return Math.round(((temp - 273.15) * (9 / 5) + 32));\n    }\n    \n    const convertToC = (temp) => {\n        return Math.round(temp - 273.15);\n    }\n\n    return { getAPIData, getWeatherData};\n    \n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/WeatherModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WeatherModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModule */ \"./src/WeatherModule.js\");\n\n\nconst weather = (0,_WeatherModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// DOM selectors\nconst locationInput = document.querySelector('input');\nconst getWeatherBtn = document.querySelector('button');\n\nconst display = document.querySelector('.display-container');\nconst tempDisplay = document.querySelector('.temperature');\nconst tempDesc = document.querySelector('.description');\n\nconst radioBtns = document.querySelectorAll('input[type=\"radio\"');\n\nconst loadingComponent = document.querySelector('.loading-component');\n\n\ngetWeatherBtn.addEventListener('click', function() {\n    const unit = setUnit();\n\n    loadingComponent.hidden = false;\n\n    weather.getAPIData(locationInput.value)\n    .then((response) => {\n        loadingComponent.hidden = true;\n\n        const weatherData = weather.getWeatherData(response, unit);\n\n        tempDisplay.textContent = `${weatherData.temperatue}\\u00B0`;\n        tempDesc.textContent = weatherData.description;\n        setBackground(weatherData.main);\n    });\n});\n\nfunction setUnit() {\n    for (const radio of radioBtns) {\n        if (radio.checked) {\n            return radio.value;\n        }\n    }\n}\n\nfunction setBackground(id) {\n    if (id < 600) {\n        display.style.backgroundImage = 'url(' + __webpack_require__(/*! ./img/rain.jpg */ \"./src/img/rain.jpg\") + ')'\n    } else if (id > 600 && id < 700) {\n        display.style.backgroundImage = 'url(' + __webpack_require__(/*! ./img/snow.jpeg */ \"./src/img/snow.jpeg\") + ')';\n    } else if (id > 700 && id < 800) {\n        display.style.backgroundImage = 'url(' + __webpack_require__(/*! ./img/fog.jpg */ \"./src/img/fog.jpg\") + ')'\n    } else if (id == 800) {\n        display.style.backgroundImage = 'url(' + __webpack_require__(/*! ./img/clear.png */ \"./src/img/clear.png\") + ')'\n    } else {\n        display.style.backgroundImage = 'url(' + __webpack_require__(/*! ./img/clouds.jpg */ \"./src/img/clouds.jpg\") + ')'\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/img/clear.png":
/*!***************************!*\
  !*** ./src/img/clear.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b44ec641d899fb4df2a8.png\";\n\n//# sourceURL=webpack://weather-app/./src/img/clear.png?");

/***/ }),

/***/ "./src/img/clouds.jpg":
/*!****************************!*\
  !*** ./src/img/clouds.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd10161672ea50da43ba.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/img/clouds.jpg?");

/***/ }),

/***/ "./src/img/fog.jpg":
/*!*************************!*\
  !*** ./src/img/fog.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b959c8f5fcda858aea37.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/img/fog.jpg?");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26344a5abfae578d4046.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/img/rain.jpg?");

/***/ }),

/***/ "./src/img/snow.jpeg":
/*!***************************!*\
  !*** ./src/img/snow.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d1f8b75ff6375bb6cbd.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/img/snow.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;