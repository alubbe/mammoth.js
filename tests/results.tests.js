var assert = require("assert");

var results = require("../lib/results");
var Result = results.Result;
var test = require("./testing").test;


describe("Result.combine", function() {
    test("removes any duplicate messages", function() {
        var first = new Result(null, [results.warning("Warning...")]);
        var second = new Result(null, [results.warning("Warning...")]);

        var combined = Result.combine([first, second]);

        assert.deepEqual(combined.messages, [results.warning("Warning...")]);
    });
});
