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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// 3. Director class\nvar Director = /** @class */ (function () {\n    function Director() {\n    }\n    Director.prototype.workFromHome = function () {\n        return \"Working from home\";\n    };\n    Director.prototype.getCoffeeBreak = function () {\n        return \"Getting a coffee break\";\n    };\n    Director.prototype.workDirectorTasks = function () {\n        return \"Getting to director tasks\";\n    };\n    return Director;\n}());\n// 4. Teacher class\nvar Teacher = /** @class */ (function () {\n    function Teacher() {\n    }\n    Teacher.prototype.workFromHome = function () {\n        return \"Cannot work from home\";\n    };\n    Teacher.prototype.getCoffeeBreak = function () {\n        return \"Cannot have a break\";\n    };\n    Teacher.prototype.workTeacherTasks = function () {\n        return \"Getting to work\";\n    };\n    return Teacher;\n}());\nfunction createEmployee(salary) {\n    if (salary < 500) {\n        return new Teacher();\n    }\n    return new Director();\n}\n// ---- Example usage ----\nconsole.log(createEmployee(200)); // Teacher\nconsole.log(createEmployee(1000)); // Director\nconsole.log(createEmployee(\"$500\")); // Director\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;