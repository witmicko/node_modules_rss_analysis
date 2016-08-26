/**
 * Created by Mick on 09/08/2016.
 */
var memwatch = require('memwatch');
var decache = require('decache');
var util = require('util');
var sprintf = require("sprintf-js").sprintf;
var Table = require('cli-table');

var size = 0.0;

var table;

function newTable(){
  table = new Table({
    head: ['Package', 'Size change', 'Resident set', 'heapTotal', 'heapUsed']
    // colWidths: [100, 200]
  });
}

function log(dep, diff) {
  size += diff.change.size_bytes / 1000000;

  var usage = util.inspect(process.memoryUsage()).replace('{','').replace('}','').split(',');
  var rss =       sprintf("%4.2f", parseInt(usage[0].split(':')[1])/1000000);
  // var heapTotal = sprintf("%4.2f", parseInt(usage[1].split(':')[1])/1000000);
  // var heapUsed =  sprintf("%4.2f", parseInt(usage[2].split(':')[1])/1000000);

  table.push([dep, diff.change.size, rss, heapTotal, heapUsed]);
}

// function clearTable() {
//   for(var i =0; i < table.width)
// }


var hello_package ={
  "body-parser": "~1.0.2",
  "cors": "~2.2.0",
  "express": "~4.0.0",
  "request": "~2.40.0",
  "fh-mbaas-api": "5.13.1"
};
var hello_deps = Object.keys(hello_package);

var mbaas_package = {
  "async": "0.2.9",
  "colors": "0.6.2",
  "cycle": "1.0.3",
  "eyes": "0.1.8",
  "fh-db": "1.0.4",
  "fh-mbaas-client": "0.12.0",
  "fh-mbaas-express": "5.5.0",
  "fh-security": "0.2.0",
  "fh-statsc": "0.3.0",
  "lodash-contrib": "^393.0.1",
  "memcached": "^2.0.0",
  "moment": "2.0.0",
  "mongodb-uri": "0.9.7",
  "optval": "1.0.1",
  "pkginfo": "0.2.3",
  "redis": "0.8.2",
  "request": "2.12.0",
  "stack-trace": "0.0.9",
  "underscore": "1.7.0",
  "unifiedpush-node-sender": "0.12.0",
  "winston": "0.6.2"
};
var mbass_deps = Object.keys(mbaas_package);

var fh_db_package = {
  "adm-zip": "~0.4.4",
  "archiver": "1.0.0",
  "async": "1.5.2",
  "bson": "0.4.22",
  "csvtojson": "0.3.6",
  "jcsv": "0.0.3",
  "lodash": "2.4.1",
  "mongodb": "2.1.18",
  "stream-buffers": "3.0.0"
};
var fh_db_deps = Object.keys(fh_db_package);

var decacheAll = function() {
  hello_deps.forEach(function(dep) {
    decache(dep);
  });
  mbass_deps.forEach(function(dep) {
    decache(dep);
  });
  fh_db_deps.forEach(function(dep) {
    decache(dep);
  });
};
newTable();
console.log('-----HELLO WORLD CLOUD APP-----');

for (var i = 0; i < hello_deps.length; i++) {
  var hd = new memwatch.HeapDiff();
  var dep = hello_deps[i];
  require(dep);
  var diff = hd.end();
  decacheAll();
  log(dep, diff);
}
console.log(table.toString());
// table = {[], opt};
// mbaas init

// var hd = new memwatch.HeapDiff();
// var dep = "fh-mbaas-api";
// var rqdep = require(dep);
// var mbaasExpress = rqdep.mbaasExpress();
//
// var diff = hd.end();
// delete mbaasExpress;
// delete rqdep;
// decacheAll();
// log(dep+'+mbassExpress', diff);
// delete diff;

newTable();
console.log('\n\n-----------MBAAS-----------');
for (var i = 0; i < mbass_deps.length; i++) {
  var hd = new memwatch.HeapDiff();
  var dep = mbass_deps[i];
  require(dep);
  var diff = hd.end();
  decacheAll();
  log(dep, diff);
  delete diff;

}
console.log(table.toString());

newTable();
console.log('\n\n-----------FH-DB-----------');
for (var i = 0; i < fh_db_deps.length; i++) {
  var hd = new memwatch.HeapDiff();
  var dep = fh_db_deps[i];
  require(dep);
  var diff = hd.end();
  decacheAll();
  log(dep, diff);
  delete diff;

}
console.log(table.toString());



process.exit();