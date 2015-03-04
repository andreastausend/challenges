var fib = require("../src/fibonacci"),
    assert = require("assert");

describe('Fibonacci', function(){
    it("fib(1) != 1", function(){
        assert.equal(fib(1),1);
    });
    it("fib invariante", function(){
        assert.equal(fib(5)-fib(4),fib(3)) ;
    });
});