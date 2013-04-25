/*
    Distinct(array) tests
*/
test("distinct(array)", function () {
    var input1 = [1, 2, 1, 3];
    equal($.arrayUtilities.distinct(input1).length, 3, "distinct(input1): lenght test, passed");

    var input2 = [1, 2, 1, 3, 3, 3, 4, 1, 2];
    equal($.arrayUtilities.distinct(input2).length, 4, "distinct(input2): lenght test, passed");

    var input3 = [1, 2, 1, 3, 5, 6];
    equal($.arrayUtilities.distinct(input3).join(), [1, 2, 3, 5, 6].join(), "distinct(input3): join test, passed");
    equal($.distinct(input3).join(), [1, 2, 3, 5, 6].join(), "$.distinct(input3): join test, passed");

    var exceptionThrown = false;

    try {
        var noResult = $.arrayUtilities.distinct();
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "distinct(): Exception thrown, passed");

    exceptionThrown = false;

    try {
        var notArrayInput = {}

        var noResult = $.arrayUtilities.distinct(notArrayInput);
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "distinct(notArrayInput): Exception thrown, passed");

    exceptionThrown = false;

    try {
        var noResult = $.arrayUtilities.distinct(input1, input2);
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "distinct(input1, input2): Exception thrown, passed");

    var strInput1 = ['a', 'b', 'b', 'c'];
    equal($.arrayUtilities.distinct(strInput1).length, 3, "distinct(strInput1): lenght test, passed");

    var objInput1 = [{}, {}, { a: 'a' }, { b: ''}];
    equal($.arrayUtilities.distinct(objInput1).length, 4, "distinct(objInput1): lenght test, passed");

    var obj1 = {};
    var obj2 = { a: 'a', b: 'b' };

    var objInput2 = [obj1, obj2, { a: 'a' }, {}, obj2, obj1, {}];
    equal($.arrayUtilities.distinct(objInput2).length, 5, "distinct(objInput2): lenght test, passed");

    equal($.arrayUtilities.distinct([]), 0, 'distinct([]): lenght test, passed');
});
/*
    union(array1, array2, ... , arrayN)
*/
test("union(array1, array2, ... , arrayN)", function () {
    var input1 = [1, 2, 1, 3, 5, 6];
    var input2 = [1, 2, 1, 3, 3, 7, 3, 4, 1, 2];
    var input3 = [8, 9, 9];

    equal($.arrayUtilities.union(input1, input2).length, 7, "union(input1, input2): passed");
    equal($.arrayUtilities.union(input2, input1).length, 7, "union(input2, input1): passed");
    equal($.arrayUtilities.union(input1, input1).length, 5, "union(input2, input1): passed");
    equal($.arrayUtilities.union(input2, input2).length, 5, "union(input2, input1): passed");
    equal($.arrayUtilities.union(input1, input2, input3).length, 9, "union(input1, input2, input3): passed");
    equal($.union(input1, input2, input3).length, 9, "$.union(input1, input2, input3): passed");
    equal($.arrayUtilities.union(input1, []).length, 5, "union(input2, []): passed");

    var exceptionThrown = false;

    try {
        var noResult = $.arrayUtilities.union();
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "union(): Exception thrown, passed");

    exceptionThrown = false;

    try {
        var notArrayInput = {}

        var noResult = $.arrayUtilities.union(input1, notArrayInput);
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "union(input1, notArrayInput): Exception thrown, passed");

    var strInput1 = ['a', 'b', 'b', 'c'];
    var strInput2 = ['a', 'b', 'd', 'd'];

    equal($.arrayUtilities.union(strInput1, strInput2).length, 4, 'union(strInput1, strInput2): passed');

    var objInput1 = [{}, { a: 'a'}];
    var objInput2 = [{ a: 'a' }, {}, { b: 'b'}];

    equal($.arrayUtilities.union(objInput1, objInput2).length, 5, 'union(objInput1, objInput2): passed');
    equal($.arrayUtilities.union(input1, strInput1, objInput1).length, 10, 'union(input1, strInput1, objInput1): passed');

    var obj1 = {};
    var obj2 = { a: 'a', b: 'b' };

    var objInput3 = [obj1, obj2];
    var objInput4 = [obj2, obj2, obj1];

    equal($.arrayUtilities.union(objInput3, objInput4).length, 2, 'union(objInput3, objInput4): passed');
});
/*
    intersect(array1, array2, ... , arrayN)
*/
test("intersect(array1, array2, ... , arrayN)", function () {
    var input1 = [1, 2, 1, 3, 5, 6];
    var input2 = [1, 2, 1, 3, 3, 7, 3, 4, 1, 2];

    equal($.arrayUtilities.intersect(input1, input2).length, 3, "intersect(input1, input2): lenght test, passed");
    ok($.arrayUtilities.intersect(input1, input2).indexOf(1) >= 0, "intersect(input1, input2): contains test 1, passed");
    ok($.arrayUtilities.intersect(input1, input2).indexOf(2) >= 0, "intersect(input1, input2): contains test 2, passed");
    ok($.arrayUtilities.intersect(input1, input2).indexOf(3) >= 0, "intersect(input1, input2): contains test 3, passed");
    ok($.arrayUtilities.intersect(input1, input2).indexOf(4) == -1, "intersect(input1, input2): does not contains test 1, passed");

    var exceptionThrown = false;

    try {
        var noResult = $.arrayUtilities.intersect();
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "intersect(): Exception thrown, passed");

    exceptionThrown = false;

    try {
        var notArrayInput = {}

        var noResult = $.arrayUtilities.intersect(input1, notArrayInput);
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "intersect(input1, notArrayInput): Exception thrown, passed");

    var input3 = [7, 2, 1, 5, 2];

    equal($.arrayUtilities.intersect(input1, input2, input3).length, 2, "intersect(input1, input2, input3): lenght test, passed");
    equal($.intersect(input1, input2, input3).length, 2, "$.intersect(input1, input2, input3): lenght test, passed");
    ok($.arrayUtilities.intersect(input1, input2, input3).indexOf(1) >= 0, "intersect(input1, input2, input3): contains test 1, passed");
    ok($.arrayUtilities.intersect(input1, input2, input3).indexOf(2) >= 0, "intersect(input1, input2, input3): contains test 2, passed");
    ok($.arrayUtilities.intersect(input1, input2, input3).indexOf(3) == -1, "intersect(input1, input2, input3): does not contains test 3, passed");

    var input4 = [7, 1, 3, 5, 1];

    equal($.arrayUtilities.intersect(input1, input2, input3, input4).length, 1, "intersect(input1, input2, input3, input4): lenght test, passed");
    ok($.arrayUtilities.intersect(input1, input2, input3, input4).indexOf(1) >= 0, "intersect(input1, input2, input3, input4): contains test 1, passed");
    ok($.arrayUtilities.intersect(input1, input2, input3, input4).indexOf(2) == -1, "intersect(input1, input2, input3, input4): does not contains test 2, passed");

    equal($.arrayUtilities.intersect(input1, []).length, 0, "intersect(input1, []): lenght test, passed");
    equal($.arrayUtilities.intersect([], input2).length, 0, "intersect([], input2): lenght test, passed");

    var strInput1 = ['a', 'b', 'b', 'b', 'c'];
    var strInput2 = ['d', 'c', 'c', 'c'];

    equal($.arrayUtilities.intersect(strInput1, strInput2).length, 1, "intersect(strInput1, strInput2): lenght test, passed");

    var objInput1 = [{}, {}];
    var objInput2 = [{}, { a: {}}];

    equal($.arrayUtilities.intersect(objInput1, objInput2).length, 0, "intersect(strInput1, strInput2): lenght test, passed");

    var obj1 = { a: { a: 'a'} };
    var obj2 = { b: { a: 'a'} };

    var objInput3 = [obj1, obj2, []];
    var objInput4 = [obj1, obj1, obj2];

    equal($.arrayUtilities.intersect(objInput3, objInput4).length, 2, "intersect(objInput3, objInput4): lenght test, passed");
    equal($.intersect(objInput3, objInput4, []).length, 0, "$.intersect(objInput3, objInput4, []): lenght test, passed");
});
/*
    except(array1, array2, ... , arrayN)
*/
test("except(array1, array2, ... , arrayN)", function () {
    var input1 = [1, 2, 1, 3, 5, 6];
    var input2 = [1, 2, 1, 3, 3, 7, 3, 4, 1, 2];

    equal($.arrayUtilities.except(input1, input2).length, 2, "except(input1, input2): lenght test, passed");
    ok($.arrayUtilities.except(input1, input2).indexOf(5) >= 0, "except(input1, input2): contains test 1, passed");
    ok($.arrayUtilities.except(input1, input2).indexOf(6) >= 0, "except(input1, input2): contains test 2, passed");
    ok($.arrayUtilities.except(input1, input2).indexOf(1) == -1, "except(input1, input2): does not contains test 1, passed");
    ok($.arrayUtilities.except(input1, input2).indexOf(2) == -1, "except(input1, input2): does not contains test 2, passed");
    ok($.arrayUtilities.except(input1, input2).indexOf(3) == -1, "except(input1, input2): does not contains test 3, passed");
    equal($.arrayUtilities.except(input1, []).length, 5, "except(input1, []): lenght test, passed");

    var exceptionThrown = false;

    try {
        var noResult = $.arrayUtilities.except();
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "except(): Exception thrown, passed");

    exceptionThrown = false;

    try {
        var notArrayInput = {}

        var noResult = $.arrayUtilities.except(input1, notArrayInput);
    } catch (e) {
        exceptionThrown = true;
    }

    ok(exceptionThrown, "except(input1, notArrayInput): Exception thrown, passed");

    var input3 = [7, 2, 5, 2];

    equal($.arrayUtilities.except(input1, input2, input3).length, 1, "except(input1, input2, input3): lenght test, passed");
    equal($.except(input1, input2, input3).length, 1, "$.except(input1, input2, input3): lenght test, passed");

    var strInput1 = ['a', 'b', 'b', 'b', 'c'];
    var strInput2 = ['d', 'c', 'c', 'c'];

    equal($.arrayUtilities.except(strInput1, strInput2).length, 2, "except(strInput1, strInput2): lenght test, passed");

    var objInput1 = [{}, {}];
    var objInput2 = [{}, { a: {}}];

    equal($.arrayUtilities.except(objInput1, objInput2).length, 2, "except(objInput1, objInput2): lenght test, passed");

    var obj1 = { a: { a: 'a'} };
    var obj2 = { b: { a: 'a'} };

    var objInput3 = [obj1, obj2, []];
    var objInput4 = [obj1, obj1, obj2];

    equal($.arrayUtilities.except(objInput3, objInput4).length, 1, "except(objInput3, objInput4): lenght test, passed");
    equal($.arrayUtilities.except(input1, strInput1, objInput1).length, 5, "except(input1, strInput1, objInput1): lenght test, passed");
});
