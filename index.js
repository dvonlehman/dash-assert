var assert = require("assert"),
  _ = require('lodash');

assert.isNumber = function(value) {
  if (_.isNumber(value) === false)
    throw new assert.AssertionError({message: "value is not a number"});
};

assert.isString = function(value) {
  if (_.isString(value) === false)
    throw new assert.AssertionError({message: "value is not a string"});
};

// Assert that the value is NaN. See https://lodash.com/docs#isNaN
assert.isNaN = function(value) {
  if (_.isNaN(value) === false)
    throw new assert.AssertionError({message: "value is not NaN"});
}

// Assert the value is an object.
// See https://lodash.com/docs#isObject
assert.isObject = function(val) {
  if (_.isObject(val) === false)
    throw new assert.AssertionError({message: "value is not an object"});
};

// Assert that all properties of the source are present on the object with equivalent values.
// See https://lodash.com/docs#isMatch
assert.isMatch = function(object, source) {
  if (_.isMatch(object, source) === false)
    throw new assert.AssertionError({message: "Source properties are not a match"});
};

// Assert that the specified value is an Error type.
// See https://lodash.com/docs#isError
assert.isError = function(value) {
  if (_.isError(value) === false)
    throw new assert.AssertionError({message: "Value is not an Error"});
};

// Assert that both arrays are the same length and contain the same values,
// though not necessarily in the same order. See https://lodash.com/docs#difference
assert.noDifferences = function(array, otherArray) {
  if (!(_.isArray(array) && _.isArray(otherArray)))
    throw new Error("Both arguments must be arrays");

  if (array.length !== otherArray.length)
    throw new assert.AssertionError({message: "Arrays are not the same length"});

  if (_.difference(array, otherArray).length > 0)
    throw new assert.AssertionError({message: "Arrays have differences"});
};

// Assert that the two arrays intersect.
assert.hasIntersect = function(array, otherArray) {
  if (!(_.isArray(array) && _.isArray(otherArray)))
    throw new Error("Both arguments must be arrays");

  if (_.intersection(array, otherArray).length === 0)
    throw new assert.AssertionError({message: "Arrays do not intersect"});
};

// Assert that the two arrays have no intersection.
assert.noIntersect = function(array, otherArray) {
  if (!(_.isArray(array) && _.isArray(otherArray)))
    throw new Error("Both arguments must be arrays");

  if (_.intersection(array, otherArray).length > 0)
    throw new assert.AssertionError({message: "Arrays intersect"});
}

// Assert that the value is an array. See https://lodash.com/docs#isArray
assert.isArray = function(val) {
  if (_.isArray(val) === false)
    throw new assert.AssertionError({message: "Value is not an array"});
};

assert.isEmpty = function(value) {
  if (_.isEmpty(value) === false)
    throw new assert.AssertionError({message: "value is not empty"});
};

assert.isNotEmpty = function(value) {
  if (_.isEmpty(value) === true)
    throw new assert.AssertionError({message: "value is empty"});
};

assert.isDefined = function(val) {
  if (_.isUndefined(val) === true)
    throw new assert.AssertionError({message: "Expected value to be defined"});
};

assert.isUndefined = function(val) {
  if (_.isUndefined(val) !== true)
    throw new assert.AssertionError({message: "Expected value to be undefined"});
};

// Assert that the value is not null. See https://lodash.com/docs#isNull
assert.isNotNull = function(value) {
  if (_.isNull(value) === true)
    throw new assert.AssertionError({message: "value is null"});
};

// Assert that the value is null. See https://lodash.com/docs#isNull
assert.isNull = function(value) {
  if (_.isNull(value) === false)
    throw new assert.AssertionError({message: "value is not null"});
};

// Assert that predicate returns truthy for any element of collection.
// See https://lodash.com/docs#some
assert.some = function(collection, predicate) {
  if (_.some(collection, predicate) !== true)
    throw new assert.AssertionError({message: "No matching value in the collection"});
};

// Assert that predicate returns truthy for every element of collection.
// See https://lodash.com/docs#every
assert.every = function(collection, predicate) {
  if (_.every(collection, predicate) !== true)
    throw new assert.AssertionError({message: "Not all the values in the collection pass the test"});
};

// --- The assertions below are not direct wrappers of lodash functions, but are handy nonetheless. --

// Assert that the value === true.
assert.isTrue = function(value) {
  assert.strictEqual(value, true);
};

// Assert that the value === false.
assert.isFalse = function(value) {
  assert.strictEqual(value, false);
};

// Assert that the value passes the regex test.
assert.matchesPattern = function(value, regex) {
  if (_.isString(value) === false)
    throw new Error("value is not a string");

  if (_.isRegExp(regex) === false)
    throw new Error("regex is not a RegExp");

  if (regex.test(value) !== true)
    throw new assert.AssertionError({message: "value does not pass regex test"});
};

// Assert that the value is a valid JSON string.
assert.isJSON = function(val) {
  var valid = false;
  if (_.isString(val)) {
    try {
      JSON.parse(val);
      valid = true;
    }
    catch (e) {
      valid = false;
    }
  }
  if (valid !== true)
    throw new assert.AssertionError({message: "Not valid JSON"});
};
