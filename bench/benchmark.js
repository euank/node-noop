var benchmark = require('benchmark');
var suite = new benchmark.Suite();

var noop = require('../');
var fs = require('fs');

// Here we benchmark node-noop against various other things that are known
// to do nothing to see if we have the fastest way of doing nothing.

suite.add('node-noop#noop', function() {
  noop.noop();
})
.add('writing to /dev/null', function(deferred) {
  fs.writeFile("/dev/null", "hello world", function() {
    deferred.resolve();
  });
}, {defer: true})
.add('reversing an array twice', function() {
  ["hello", "world"].reverse().reverse();
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
