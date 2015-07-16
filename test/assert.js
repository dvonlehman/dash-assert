var assert = require('assert');
require('..');

describe('dash-assert', function() {
  it('isNumber', function() {
    assert.isNumber(1);
    assert.throws(function() {
      assert.isNumber("1");
    });
  });

  it('isArray', function() {
    assert.isArray([1, 2]);

    assert.throws(function() {
      assert.isArray({});
    });
  });

  it('isObject', function() {
    assert.isObject({foo: 'test'});

    assert.throws(function() {
      assert.isObject(1);
    });
  });

  it('isString', function() {
    assert.isString('test');

    assert.throws(function() {
      assert.isString(1);
    });
  });

  it('isNaN', function() {
    assert.isNaN(NaN);

    assert.throws(function() {
      assert.isNaN(1);
    })
  });

  it('isError', function() {
    assert.isError(new Error("error"));

    assert.throws(function() {
      assert.isError('5');
    });
  });

  it('isMatch', function() {
    assert.isMatch({name: 'John', age: 40}, {name: 'John'});

    assert.throws(function() {
      assert.isMatch({name: 'John', age: 40}, {name: 'Sally'});
    });
  });

  it('noDifferences', function() {
    assert.noDifferences([1, 2, 3], [2, 3, 1]);

    assert.throws(function() {
      assert.noDifferences([1, 2, 3], [2, 3, 4]);
    });

    assert.throws(function() {
      assert.noDifferences([], [1, 2, 3]);
    });
  });

  it('hasIntersect', function() {
    assert.hasIntersect([2, 4, 6], [1, 2, 3]);

    assert.throws(function() {
      assert.hasIntersect([1, 2, 3], [4, 5, 6]);
    });
  });

  it('noIntersect', function() {
    assert.noIntersect([1, 2, 3], [4, 5, 6]);

    assert.throws(function() {
      assert.noIntersect([1, 2, 3], [3, 4, 5]);
    });
  });

  it('isEmpty', function() {
    assert.isEmpty('');
    assert.isEmpty(null);
    assert.isEmpty([]);
    assert.isEmpty({});

    assert.throws(function() {
      assert.isEmpty('1');
      assert.isEmpty(1);
      assert.isEmpty([1]);
      assert.isEmpty({foo: 'test'});
    });
  });

  it('isNotEmpty', function() {
    assert.isNotEmpty('1');
    assert.isNotEmpty([1]);
    assert.isNotEmpty({foo: 'test'});

    assert.throws(function() {
      assert.isNotEmpty('');
      assert.isNotEmpty(null);
      assert.isNotEmpty([]);
      assert.isNotEmpty({});
    });
  });

  it('isUndefined', function() {
    var value;
    assert.isUndefined(value);
    assert.throws(function() {
      value = 1;
      assert.isUndefined(value);
    });
  });

  it('isDefined', function() {
    var value;
    assert.throws(function() {
      assert.isDefined(value);
    });

    value = 1;
    assert.isDefined(value);
  });

  it('isNull', function() {
    var value = null;
    assert.isNull(value);

    assert.throws(function() {
      value = 1;
      assert.isNull(value);
    });
  });

  it('isNotNull', function() {
    var value = null;
    assert.throws(function() {
      assert.isNotNull(value);
    });

    value = 1;
    assert.isNotNull(value);
  });

  it('some', function() {
    assert.some([{name: 'John'}, {name:'Bill'}, {name:'Sally'}], {name:'Bill'});
    assert.some([1, 2, 3, 4], function(value) {
      return value % 2 == 0;
    });

    assert.throws(function() {
      assert.some([{name: 'John'}, {name:'Bill'}, {name:'Sally'}], {name:'Mark'});

      assert.some([1, 3, 5, 7], function(value) {
        return value % 2 == 0;
      });
    });
  });

  it('every', function() {
    assert.every([{month:'March', year:2014}, {month:'June', year:2014}, {month:'July', year:2014}], {year:2014});

    assert.every([2, 4, 6, 8], function(value) {
      return value % 2 == 0;
    });

    assert.throws(function() {
      assert.every([{month:'March', year:2014}, {month:'June', year:2015}, {month:'July', year:2014}], {year:2014});

      assert.every([2, 4, 5, 6], function(value) {
        return value % 2 == 0;
      });
    });
  });

  it('isTrue', function() {
    assert.isTrue(5>4);
    assert.throws(function() {
      assert.isTrue(1>2);
    });
  });

  it('isFalse', function() {
    assert.isFalse(0>1);
    assert.throws(function() {
      assert.isFalse(1>0);
    });
  });

  it('matchesPattern', function() {
    assert.matchesPattern('hello', /[a-z]+/);
    assert.matchesPattern('hello', new RegExp("[a-z]+"));

    assert.throws(function() {
      assert.matchesPattern('hello', 'not a regex');
      assert.matchesPattern('hello', /[0-9]+/);
    });
  });

  it('isJSON', function() {
    assert.isJSON('{"one":"two", "arr":[1, 2, 3]}');

    assert.throws(function() {
      assert.isJSON('not JSON');
    });
  });
});
