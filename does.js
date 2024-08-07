function does(func) {
    var fn = func.bind();
    fn.then = then;
    return fn;
};

function then (fn2, args) {
    var fn1 = this;
    var argsA2 = args || [].slice.call(arguments, 1);
    var outFn = function () {
        var argsA = [].slice.call(arguments, 0);
        var fnval = fn1.apply(this, argsA);
        if (fnval !== undefined) argsA2.unshift(fnval);
        return fn2.apply(null, argsA2);
    };
    outFn.then = then;
    return outFn;
};

module.exports = does;
