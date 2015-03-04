var memoizer = function (memo, formula) {
    var recur = function (n) {
        n = typeof n !== 'number' ? n : [n];
        var result = memo[n[0]];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n[0]] = result;
        }
        return result;
    };
    return recur;
};

var deficiency = memoizer([0], function (recur, a) {
    return a[1] * (recur([a[0] - 1, a[1]]) + 1) * (recur([a[0] - 1, a[1]]) + 1);
});

var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});


module.exports = fibonacci;