/**
 * Created by Mick on 25/08/2016.
 */
var colors = require('colors');

var moduleName = process.argv[2];
var moduleVer = process.argv[3];
var before = process.memoryUsage();
var request = require(moduleName);
var after = process.memoryUsage();
var diff = (after.rss - before.rss)/1000000;
console.log("Diff for " + moduleName + ' ' + moduleVer, colors.red(diff), ' mb');