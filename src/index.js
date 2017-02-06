"use strict";

import isNode from "detect-node";
import defined from "defined";
import {terminal as term} from "terminal-kit";

const DEFAULT_WIDTH = 80;

function helper(str, width) {
    return str.repeat(defined(width, isNode ? term.width - 1 : undefined, DEFAULT_WIDTH));
}

const DividingLines = {
    equal: (...args) => helper('=', ...args),

    dash: (...args) => helper('-', ...args),

    underscore: (...args) => helper('_', ...args),

    wave: (...args) => helper('~', ...args),

    singleQuote: (...args) => helper('\'', ...args),

    doubleQuote: (...args) => helper('"', ...args),

    star: (...args) => helper('*', ...args),

    hash: (...args) => helper('#', ...args)

};


export default DividingLines;