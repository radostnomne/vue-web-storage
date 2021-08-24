(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueWebStorage", [], factory);
	else if(typeof exports === 'object')
		exports["VueWebStorage"] = factory();
	else
		root["VueWebStorage"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Storage", function() { return /* reexport */ storage; });
__webpack_require__.d(__webpack_exports__, "StorageWithEvents", function() { return /* reexport */ storageWithEvents; });
__webpack_require__.d(__webpack_exports__, "Plugin", function() { return /* binding */ src_Plugin; });

// CONCATENATED MODULE: ./src/util.js
var parseJSON = function parseJSON(value) {
  try {
    return JSON.parse(value);
  } catch (e)
  /*istanbul ignore next*/
  {
    console.error(e);
    return value;
  }
};

var arrayify = function arrayify(item) {
  return item instanceof Array ? item : [item];
};


// CONCATENATED MODULE: ./src/fallbackStorage.js
/* harmony default export */ var fallbackStorage = ({
  storage: {},
  setItem: function setItem(key, value) {
    this.storage[key] = value;
  },
  getItem: function getItem(key) {
    return this.storage[key];
  },
  clear: function clear() {
    this.storage = {};
  },
  removeItem: function removeItem(key) {
    delete this.storage[key];
  },

  get length() {
    return Object.keys(this.storage).length;
  }

});
// CONCATENATED MODULE: ./src/storage.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var storage_Storage = /*#__PURE__*/function () {
  function Storage() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'app_';
    var driver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';

    _classCallCheck(this, Storage);

    this.prefix = prefix;

    try {
      this.storage = window["".concat(String(driver), "Storage")];
    } catch (err) {
      console.error("Failed to get ".concat(this.prefix, " storage. Will use fallback storage"), err);
      this.storage = fallbackStorage;
    }
  }

  _createClass(Storage, [{
    key: "prefixKey",
    value: function prefixKey(key) {
      return this.prefix + String(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      try {
        this.storage.setItem(this.prefixKey(key), JSON.stringify(value));
        return true;
      } catch (e)
      /*istanbul ignore next*/
      {
        console.error(e);
        return false;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var storedValue = parseJSON(this.storage.getItem(this.prefixKey(key)));
      return storedValue === null ? defaultValue : storedValue;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      return this.storage.removeItem(this.prefixKey(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force) {
        this.storage.clear();
      } else {
        this.keys(true).map(function (key) {
          _this.storage.removeItem(key);
        });
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      var _this2 = this;

      var withPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var keys = []; // Loop through all storage keys

      Object.keys(this.storage).forEach(function (keyName, index) {
        /* istanbul ignore else */
        if (keyName.substr(0, _this2.prefix.length) === _this2.prefix) {
          keys.push(withPrefix ? keyName : keyName.substring(_this2.prefix.length));
        }
      });
      return keys;
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.keys().indexOf(key) !== -1;
    }
  }, {
    key: "length",
    value: function length() {
      return this.keys().length;
    }
  }]);

  return Storage;
}();

/* harmony default export */ var storage = (storage_Storage);
// CONCATENATED MODULE: ./src/events.js
function events_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function events_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function events_createClass(Constructor, protoProps, staticProps) { if (protoProps) events_defineProperties(Constructor.prototype, protoProps); if (staticProps) events_defineProperties(Constructor, staticProps); return Constructor; }


var _listeners = {};

var events_Events = /*#__PURE__*/function () {
  function Events() {
    events_classCallCheck(this, Events);

    window.addEventListener('storage', this._onChange, false);
  }

  events_createClass(Events, [{
    key: "_onChange",
    value: function _onChange(event) {
      var _this = this;

      // Notice: `this` refers to `window` inside this method
      var methods = _listeners[event.key];
      /*istanbul ignore else*/

      if (methods) {
        var newValue = parseJSON(event.newValue);
        var oldValue = parseJSON(event.oldValue);
        methods.map(function (method) {
          method.call(_this, newValue, oldValue, event.url);
        });
      }
    }
  }, {
    key: "on",
    value: function on(key, fn) {
      if (_listeners[key]) {
        _listeners[key].push(fn);
      } else {
        _listeners[key] = [fn];
      }
    }
  }, {
    key: "off",
    value: function off(key, fn) {
      var methods = _listeners[key];

      if (methods && methods.length > 1) {
        methods.splice(methods.indexOf(fn), 1);
      } else {
        delete _listeners[key];
      }
    }
  }, {
    key: "clear",
    value: function clear(key) {
      if (key) {
        delete _listeners[key];
      } else {
        _listeners = {};
      }
    }
  }, {
    key: "listeners",
    value: function listeners() {
      return _listeners;
    }
  }]);

  return Events;
}();

/* harmony default export */ var events = (events_Events);
// CONCATENATED MODULE: ./src/storageWithEvents.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function storageWithEvents_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storageWithEvents_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storageWithEvents_createClass(Constructor, protoProps, staticProps) { if (protoProps) storageWithEvents_defineProperties(Constructor.prototype, protoProps); if (staticProps) storageWithEvents_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var storageWithEvents_StorageWithEvents = /*#__PURE__*/function (_Storage) {
  _inherits(StorageWithEvents, _Storage);

  var _super = _createSuper(StorageWithEvents);

  function StorageWithEvents() {
    var _this;

    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'app_';
    var driver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';

    storageWithEvents_classCallCheck(this, StorageWithEvents);

    _this = _super.call(this, prefix, driver);
    _this.events = new events();
    return _this;
  }

  storageWithEvents_createClass(StorageWithEvents, [{
    key: "on",
    value: function on(key, fn) {
      this.events.on(this.prefixKey(key), fn);
      return this;
    }
  }, {
    key: "off",
    value: function off(key, fn) {
      this.events.off(this.prefixKey(key), fn);
      return this;
    }
  }, {
    key: "clearEvents",
    value: function clearEvents(key) {
      var mayBeKey = key ? this.prefixKey(key) : false;
      this.events.clear(mayBeKey);
      return this;
    }
  }]);

  return StorageWithEvents;
}(storage);

/* harmony default export */ var storageWithEvents = (storageWithEvents_StorageWithEvents);
// CONCATENATED MODULE: ./src/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var src_registerInstance = function registerInstance(Vue, driver, prefix) {
  var instance = new storageWithEvents(prefix, driver);
  var apiName = '$' + String(driver) + 'Storage';
  Vue[apiName] = instance;
  Vue.prototype[apiName] = instance;
};

var src_Plugin = function Plugin(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var safeOptions = _extends({}, {
    prefix: 'app_',
    drivers: 'local'
  }, options);

  arrayify(safeOptions.drivers).map(function (driver) {
    src_registerInstance(Vue, driver, safeOptions.prefix);
  });
};

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Plugin);


/***/ })
/******/ ]);
});