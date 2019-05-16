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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1 && navigator.appVersion.indexOf("iPhone") == -1 && navigator.appVersion.indexOf("iPad") == -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1 && navigator.appVersion.indexOf("Android") == -1) OSName = "Linux";

var downloadBtn = document.getElementById("download-btn");
var downloadLink = document.getElementById("download-link");

var downloadUrls = {
  windows: "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/GB.Studio-win32-x64-squirrel-1.0.0.zip",
  mac: "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/GB.Studio-darwin-x64-1.0.0.zip",
  deb: "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/gb-studio_1.0.0_amd64.deb",
  rpm: "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/gb-studio-1.0.0.x86_64.rpm"
};

if (downloadBtn) {
  switch (OSName) {
    case "Windows":
      downloadBtn.innerHTML = "Download for Windows";
      downloadBtn.href = downloadUrls.windows;
      break;
    case "MacOS":
      downloadBtn.innerHTML = "Download for macOS";
      downloadBtn.href = downloadUrls.mac;
      break;
    case "Linux":
      downloadBtn.innerHTML = "Download for Ubuntu";
      downloadBtn.href = downloadUrls.deb;
      var redhatDownloadBtn = document.createElement("a");
      redhatDownloadBtn.className = "homepage-landing__button";
      redhatDownloadBtn.innerHTML = "Download for Redhat";
      redhatDownloadBtn.href = downloadUrls.rpm;
      downloadBtn.parentNode.insertBefore(redhatDownloadBtn, downloadLink);
      break;
    default:
      downloadBtn.innerHTML = "Download GB Studio";
  }
}

/***/ })
/******/ ]);