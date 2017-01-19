"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.star = exports.doubleQuote = exports.singleQuote = exports.wave = exports.underscore = exports.dash = exports.equal = undefined;

var _terminalKit = require('terminal-kit');

function helper(str, width) {
    return str.repeat(width || _terminalKit.terminal.width - 1);
}

var equal = function equal() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return helper.apply(undefined, ['='].concat(args));
};

var dash = function dash() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    return helper.apply(undefined, ['-'].concat(args));
};

var underscore = function underscore() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    return helper.apply(undefined, ['_'].concat(args));
};

var wave = function wave() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
    }

    return helper.apply(undefined, ['~'].concat(args));
};

var singleQuote = function singleQuote() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
    }

    return helper.apply(undefined, ['\''].concat(args));
};

var doubleQuote = function doubleQuote() {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
    }

    return helper.apply(undefined, ['"'].concat(args));
};

var star = function star() {
    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
    }

    return helper.apply(undefined, ['*'].concat(args));
};

exports.equal = equal;
exports.dash = dash;
exports.underscore = underscore;
exports.wave = wave;
exports.singleQuote = singleQuote;
exports.doubleQuote = doubleQuote;
exports.star = star;
//# sourceMappingURL=index.js.map