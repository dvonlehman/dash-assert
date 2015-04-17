# dash-assert

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

A simple assertion wrapper library around [lodash](https://lodash.com).

Maybe BDD style assertions are what the cool kids do, but some of us still prefer old style assert statements. Personally I find it easier to reason about my tests when the key lines actually begin with the word "assert".

The Node.js [Assert](https://nodejs.org/api/assert.html) module is a good start, but has limited expressiveness. Lodash offers a very expressive API that lends itself well to testing, so conditionally throwing an AssertionError based on the result of a lodash function feels like a natural fit.

## Installation
~~~
npm install dash-assert --save-dev
~~~

## Usage
Since this library simply extends Node's [assert](https://nodejs.org/api/assert.html), use it right alongside `assert.equal`, `assert.throws`, `assert.ok`, etc.

~~~js
var assert = require('assert');
require('dash-assert');

it('returns an array', function() {
  assert.isArray(someFunction());
});
~~~

## API

### assert.isNumber(value)
Assert that that value is a number using [`_.isNumber`](https://lodash.com/docs#isNumber).

### assert.isNaN(value)
Assert that value is NaN using [`_.isNaN`](https://lodash.com/docs#isNaN).

### assert.isObject(value)
Assert that value is an object using [`_.isObject`](https://lodash.com/docs#isObject).

### assert.isString(value)
Assert that value is a astring using [`_.isString`](https://lodash.com/docs#isString).

### assert.isArray(value)
Assert that value is an array using [`_.isArray`](https://lodash.com/docs#isArray).

### assert.isEmpty(value)
Assert that value is empty using [`_.isEmpty`](https://lodash.com/docs#isEmpty).

### assert.isNotEmpty(value)
Assert that the value is not empty using the inverse of [`_.isEmpty`](https://lodash.com/docs#isEmpty).

### assert.isError(value)
Assert that the specified value in an `Error` type using [`_.isError`](https://lodash.com/docs#isError).

### assert.isNull(value)
Assert that the value is null using [`_.isNull`](https://lodash.com/docs#isNull).

### assert.isNotNull(value)
Assert that the value is null using the inverse of [`_.isNull`](https://lodash.com/docs#isNull).

### assert.isUndefined(value)
Assert that the specified value is undefined based on [`_.isUndefined`](https://lodash.com/docs#isUndefined).

### assert.isDefined(value)
Assert that the specified value is not undefined based on the inverse of [`_.isUndefined`](https://lodash.com/docs#isUndefined).

### assert.some(collection, predicate)
Assert that the predicate returns truthy for __any__ element in the collection using [`_.some`](https://lodash.com/docs#some).

### assert.every(collection, predicate)
Assert that the predicate returns truthy for __all__ elements of the collection using [`_.every`](https://lodash.com/docs#every).

### assert.isMatch(object, source)
Assert that all properties of the source are present on the object with equivalent values using [`_.isMatch`](https://lodash.com/docs#isMatch).

### assert.isTrue(value)
Shortcut for `assert.strictEqual(value, true)`.

### assert.isFalse(value)
Shortcut for `assert.strictEqual(value, false)`.

### assert.hasIntersect(array, otherArray)
Assert that there is at least one value in common between the two arrays based on [`_.intersection`](https://lodash.com/docs#intersection) having a length greater than 0.

### assert.noIntersect(array, otherArray)
Assert that the two arrays do not intersect based on [`_.intersection`](https://lodash.com/docs#intersection) having a length equal to 0.

### assert.noDifferences(array, otherArray)
Assert that there are no differences between the two arrays based on [`_.difference`](https://lodash.com/docs#difference) having a length of 0.

### assert.matchesPattern(value, regex)
Assert that the value passes a RegExp test.

### assert.isJSON(value)
Assert that value is a string that does not throw an error when passed to `JSON.parse`.

## Running Tests
~~~
npm test
~~~

[npm-image]: https://img.shields.io/npm/v/dash-assert.svg?style=flat
[npm-url]: https://npmjs.org/package/dash-assert
[travis-image]: https://img.shields.io/travis/dvonlehman/dash-assert.svg?style=flat
[travis-url]: https://travis-ci.org/dvonlehman/dash-assert
[coveralls-image]: https://img.shields.io/coveralls/dvonlehman/dash-assert.svg?style=flat
[coveralls-url]: https://coveralls.io/r/dvonlehman/dash-assert?branch=master
[downloads-image]: https://img.shields.io/npm/dm/dash-assert.svg?style=flat
[downloads-url]: https://npmjs.org/package/dash-assert
