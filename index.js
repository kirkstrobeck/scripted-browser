'use strict';

require('strict-version');

console.log('=== SCRIPTED BROWSER ===');

'use strict';

var $ = GLOBAL.$ = {};
var argv = require('minimist')(process.argv.slice(2));
var action = Object.keys(argv)[1];
$[action] = argv[action];

try { require('./lib/' + action); } catch (e) { console.log(e); }
