# dothen

## do stuff syncronously.

### do(thisFN).then(thatFN).then(theOtherFN)

### Usage

Returns wrapped function with chained 'then' method.

```
var sequence = do(thisFN).then(thatFN).then(theNextFN);
sequence("dream");

```

Passes correct arguments.

```
 var fn1 = function (arg1, arg2) {
      assert.equal(arg1, "arg1", "'arguments' not passed.");
      assert.equal(arg2, "arg2", "'arguments' not passed.");
    };
    var fn = does(fn1).then(fn1, ["arg1", "arg2"]);
    fn("arg1", "arg2");
```

Passes values down.

```
  var fn1 = function (val) {
      val = val || 0;
      return ++val;
    };
    var fn = does(fn1).then(fn1).then(fn1).then(fn1).then(fn1).then(fn1);
    var result = fn();
    assert.equal(result, 6, "Value not passed through.");

```
