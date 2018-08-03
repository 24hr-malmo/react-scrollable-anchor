"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = undefined;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

var rateLimit = exports.rateLimit = function rateLimit(func, wait) {
  var lastHit = 0;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var now = Date.now();
    if (now - wait > lastHit) {
      new Promise(function (resolve) {
        func.apply(undefined, args);
        resolve();
      });
      lastHit = now;
    }
  };
};