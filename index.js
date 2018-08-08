(function(exports) {
  exports.noop = function(){
    throw new ReferenceError('Whatever you\'re doing, you\'re doing it wrong');
  };
})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : window);
