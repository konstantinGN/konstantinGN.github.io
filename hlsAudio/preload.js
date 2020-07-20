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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "CQYb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "CQYb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _browserDetect = __webpack_require__("c2oQ");

var _path = __webpack_require__("G/Fd");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = window.paramsFromServer;
var isLivestream = !!(0, _path2.default)(['livestream'], p);
var isVOD = (0, _path2.default)(['video_data', 'type'], p) === 'livestream';
var element = document.createElement("div");
var config = p && p['playerConfig'] || {};

if (_browserDetect.browserDetect.isSupporting(isLivestream, isVOD)) {
  element.id = "TCP-app";
  document.getElementById("TCP-wrapper").appendChild(element);
} else {
  var headerText = config['tclanguage'] && config.tclanguage['screenNotSupportedTitle'];
  var text = config['tclanguage'] && config.tclanguage['screenNotSupportedText'];
  if (headerText) {
    document.getElementById("noSupportedHeader").innerHTML = headerText;
  }
  if (text) {
    document.getElementById("noSupportedText").innerHTML = text;
  }
  document.getElementById("not-supported").style.display = "table-cell";
  document.getElementById("not-supported-wrapper").style.display = "table";
  console.error("Browser not supported");
}

/***/ }),

/***/ "G/Fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__("r19O");


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["default"] = (path);

/***/ }),

/***/ "YIXD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isPlaceholder;
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),

/***/ "c2oQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrowserDetect = /** @class */ (function () {
    function BrowserDetect() {
        this.name = '';
        this.version = '';
        this.majorVersion = '';
        this.platform = '';
        this.platformMajorVersion = '';
        this.pattern = '';
        this.device = '';
        this.getBrowser();
    }
    BrowserDetect.prototype.isSupporting = function (isLivestream, isVOD, userAgent) {
        try {
            var agent = this.getBrowser(userAgent);
            if (agent.name === 'IE') {
                // Windows 7 - 6.1, 8 - 6.2, 8.1 - 6.3
                if (agent.platform === 'Windows' && agent.platformMajorVersion < 6.1) {
                    return false;
                }
                if (agent.platform === 'Windows' && +agent.platformMajorVersion === 6.1 && (isLivestream || isVOD)) {
                    return false;
                }
                if (+agent.majorVersion < 11) {
                    return false;
                }
            }
            if (agent.name === 'Safari') {
                if (agent.platform === 'MacOS' && +agent.majorVersion < 8) {
                    return false;
                }
                if (agent.platform === 'IOS' && agent.platformMajorVersion) {
                    if (agent.platformMajorVersion < 10) {
                        return false;
                    }
                    if (agent.platformMajorVersion < 10 && (isLivestream || isVOD)) {
                        return false;
                    }
                }
            }
            if (agent.name === 'Chrome') {
                if (+agent.majorVersion < 36) {
                    return false;
                }
                if (agent.platform === 'IOS') {
                    return false;
                }
            }
            if (agent.name === 'Firefox') {
                if (+agent.majorVersion < 44) {
                    return false;
                }
            }
            if (agent.platform === 'Android' && agent.platformMajorVersion && agent.platformMajorVersion < 5) {
                return false;
            }
            return true;
        }
        catch (err) {
            console.error(err);
            return true;
        }
    };
    BrowserDetect.prototype.getBrowser = function (userAgent) {
        if (userAgent === void 0) { userAgent = navigator.userAgent; }
        var match;
        var ub;
        var known = ['other'];
        // First get the platform?
        if (/android ([0-9]+)/i.test(userAgent)) {
            this.platform = 'Android';
            match = /android ([0-9]+)/i.exec(userAgent);
            this.platformMajorVersion = match && match[1];
        }
        else if (/cros/i.test(userAgent)) {
            this.platform = 'Chrome OS';
        }
        else if (/linux|openbsd|freebsd|unix|netbsd|cros/i.test(userAgent)) {
            this.platform = 'Linux';
        }
        else if (/iphone|ipad|ipod/i.test(userAgent)) {
            this.platform = 'IOS';
            match = /[(?:cpu iphone os),(?:cpu os),(?:macintosh|mac os x)]\s+([0-9]+)/i.exec(userAgent);
            this.platformMajorVersion = match && match[1];
        }
        else if (/mac os x/i.test(userAgent)) {
            this.platform = 'MacOS';
            match = /mac os x ([0-9]+)/i.exec(userAgent);
            this.platformMajorVersion = match && match[1];
        }
        else if (/windows|win32/i.test(userAgent)) {
            this.platform = 'Windows';
            match = /(?:(?:windows)|(?:win32))\D+([0-9]+.[0-9])/i.exec(userAgent);
            this.platformMajorVersion = match && match[1];
        }
        if (/iphone/i.test(userAgent)) {
            this.device = 'iPhone';
        }
        else if (/ipad/i.test(userAgent)) {
            this.device = 'iPad';
        }
        // Next get the name of the useragent yes seperately and for good reason
        if (/MSIE/i.test(userAgent) && !/Opera/i.test(userAgent)) {
            this.name = 'IE';
            ub = 'MSIE';
        }
        else if (/Trident/i.test(userAgent)) {
            // this condition is for IE11
            this.name = 'IE';
            ub = 'rv';
        }
        else if (/Edge/i.test(userAgent)) {
            // this condition is for IE11
            this.name = 'Edge';
            ub = 'Edge';
        }
        else if (/Firefox/i.test(userAgent)) {
            this.name = 'Firefox';
            ub = 'Firefox';
        }
        else if (/Chrome/i.test(userAgent)) {
            this.name = 'Chrome';
            ub = 'Chrome';
        }
        else if (/Safari/i.test(userAgent)) {
            this.name = 'Safari';
            ub = 'Safari';
            known.push('Version');
        }
        else if (/Opera/i.test(userAgent)) {
            this.name = 'Opera';
            ub = 'Opera';
        }
        else if (/Netscape/i.test(userAgent)) {
            this.name = 'Netscape';
            ub = 'Netscape';
        }
        known.push(ub);
        this.pattern = new RegExp('(' + known.join('|') + ')[/|: ]+([0-9.|a-zA-Z.]*)');
        this.version = this.pattern.exec(userAgent)[2];
        this.majorVersion = this.version.split('.')[0];
        return this;
    };
    return BrowserDetect;
}());
exports.browserDetect = new BrowserDetect();


/***/ }),

/***/ "j+Mk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlaceholder__ = __webpack_require__("YIXD");


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(__WEBPACK_IMPORTED_MODULE_0__isPlaceholder__["a" /* default */])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),

/***/ "r19O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__("j+Mk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__("YIXD");



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b);
        }) : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=preload.js.map