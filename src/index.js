"use strict";

import {terminal as term} from 'terminal-kit';

function helper(str, width) {
    return str.repeat(width || term.width);
}

const equal = function() {helper('=', ...arguments)};

const dash = function() {helper('-', ...arguments)};

const underscore = function() {helper('_', ...arguments)};

const wave = function() {helper('~', ...arguments)};

const singleQuote = function() {helper('\'', ...arguments)};

const doubleQuote = function() {helper('"', ...arguments)};

const star = function() {helper('*', ...arguments)};

export {equal, dash, underscore, wave, singleQuote, doubleQuote, star};