"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHash = exports.getHash = function getHash() {
  return decodeURI(window.location.hash.slice(1));
};

var updateHash = exports.updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search;

    window.location.replace("" + pathname + search + "#" + hash);
  }
};

// remove hash in url without affecting history or forcing reload
var removeHash = exports.removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};