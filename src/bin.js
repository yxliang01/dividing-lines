#!/usr/bin/env node

import DividingLines from './index.js'

console.log(DividingLines[process.argv[2]](...process.argv.slice(3)));