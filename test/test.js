var assert = require('chai').assert;
var noop = require('..');
var util = require('util');

function getStringRepresentation(obj) {
  return util.inspect(obj, {depth: null});
}

describe('noop', function() {
  it('should be a function', function() {
    assert.isFunction(noop.noop);
  });
  it('should not return anything', function() {
    assert.isUndefined(noop.noop());
    assert.isUndefined(noop.noop("some args", 1, 2, [3]));
  });
  it('should not mutate global', function() {
    var globalBefore = getStringRepresentation(global);
    noop.noop();
    assert.equal(globalBefore, getStringRepresentation(global));
  });
});
