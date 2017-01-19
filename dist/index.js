"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.star = exports.doubleQuote = exports.singleQuote = exports.wave = exports.underscore = exports.dash = exports.equal = undefined;

var _terminalKit = require('terminal-kit');

function helper(str, width) {
    return str.repeat(width || _terminalKit.terminal.width);
}

var equal = function equal() {
    helper.apply(undefined, ['='].concat(Array.prototype.slice.call(arguments)));
};

var dash = function dash() {
    helper.apply(undefined, ['-'].concat(Array.prototype.slice.call(arguments)));
};

var underscore = function underscore() {
    helper.apply(undefined, ['_'].concat(Array.prototype.slice.call(arguments)));
};

var wave = function wave() {
    helper.apply(undefined, ['~'].concat(Array.prototype.slice.call(arguments)));
};

var singleQuote = function singleQuote() {
    helper.apply(undefined, ['\''].concat(Array.prototype.slice.call(arguments)));
};

var doubleQuote = function doubleQuote() {
    helper.apply(undefined, ['"'].concat(Array.prototype.slice.call(arguments)));
};

var star = function star() {
    helper.apply(undefined, ['*'].concat(Array.prototype.slice.call(arguments)));
};

exports.equal = equal;
exports.dash = dash;
exports.underscore = underscore;
exports.wave = wave;
exports.singleQuote = singleQuote;
exports.doubleQuote = doubleQuote;
exports.star = star;