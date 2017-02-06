#!/usr/bin/env node
'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log(_index2.default[process.argv[2]].apply(_index2.default, _toConsumableArray(process.argv.slice(3))));
//# sourceMappingURL=bin.js.map