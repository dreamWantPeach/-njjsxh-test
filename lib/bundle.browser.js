(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dry = factory());
})(this, (function () { 'use strict';

    var testFun = function (str) {
        return str + 123;
    };

    return testFun;

}));

  if(typeof window !=='undefined'){
    windwo._Dry_VERSION_ = '0.0.1'
  }
