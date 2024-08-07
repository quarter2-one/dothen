var assert = require("assert");
var does = require("../does.js");
var Taste = require("taste-test");
var test = new Taste.Test();

test.describe("doesthen.js", {
  "Returns wrapped function with 'then' method.": function () {
    var fn1 = function () {};
    var fn2 = does(fn1);
    assert("then" in fn2, "No 'then' method.");
  },

  "Calls all functions in sequence.": function () {
    var count = 0;
    var fn1 = function () {
      count++;
    };
    var fn = does(fn1).then(fn1).then(fn1).then(fn1);
    fn();
    assert.equal(count, 4, "Not all functions ran.");
  },

  "Passes correct arguments.": function () {
    var count = 0;
    var fn1 = function (arg1, arg2) {
      assert.equal(arg1, "arg1", "'arguments' not passed.");
      assert.equal(arg2, "arg2", "'arguments' not passed.");
    };
    var fn = does(fn1).then(fn1, ["arg1", "arg2"]);
    fn("arg1", "arg2");
  },

  "Passes values down.": function () {
    var fn1 = function (val) {
      val = val || 0;
      return ++val;
    };
    var fn = does(fn1).then(fn1).then(fn1).then(fn1).then(fn1).then(fn1);
    var result = fn();
    assert.equal(result, 6, "Value not passed through.");
  },
});
