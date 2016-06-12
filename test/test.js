var assert = require('chai').assert;
var noop = require('..');

describe('noop', function() {
  it('should be a function', function() {
    assert.isFunction(noop.noop);
  });
  it('should not return anything', function() {
    assert.isUndefined(noop.noop());
    assert.isUndefined(noop.noop("some args", 1, 2, [3]));
  });
  it('should not mutate global', function() {
    var globalBefore = global;
    noop.noop();
    assert.equal(globalBefore, global);
  });
});
