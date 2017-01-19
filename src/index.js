"use strict";

import {terminal as term} from 'terminal-kit';

function helper(str, width) {
    return str.repeat(width || term.width-1);
}

const equal = (...args)=>helper('=', ...args);

const dash = (...args)=>helper('-', ...args);

const underscore = (...args)=>helper('_', ...args);

const wave = (...args)=>helper('~', ...args);

const singleQuote = (...args)=>helper('\'', ...args);

const doubleQuote = (...args)=>helper('"', ...args);

const star = (...args)=>helper('*', ...args);

export {equal, dash, underscore, wave, singleQuote, doubleQuote, star};