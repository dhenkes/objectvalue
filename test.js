var tape = require('tape');
var objectvalue = require('./index');

var obj = {
  "one": "two",
  "deep": {
    "key": true
  },
  "a": null,
  "really": {
    "really": {
      "deep.key": 123
    }
  },
  "arr": [
    {
      "with": "objects"
    }
  ]
};

tape('test - return undefined', function (t) {
  var test = objectvalue.get(undefined, 'test');
  t.equal(test, undefined);
  t.end();
});

tape('one - return two', function (t) {
  var test = objectvalue.get(obj, 'one');
  t.equal(test, 'two');
  t.end();
});

tape('two - return undefined', function (t) {
  var test = objectvalue.get(obj, 'two');
  t.equal(test, undefined);
  t.end();
});

tape('two.test - return undefined', function (t) {
  var test = objectvalue.get(obj, 'two.test');
  t.equal(test, undefined);
  t.end();
});

tape('deep.key - return true', function (t) {
  var test = objectvalue.get(obj, 'deep.key');
  t.equal(test, true);
  t.end();
});

tape('a - return null', function (t) {
  var test = objectvalue.get(obj, 'a');
  t.equal(test, null);
  t.end();
});

tape('really.really.deep.key - return 123', function (t) {
  var test = objectvalue.get(obj, 'really.really.deep.key');
  t.equal(test, 123);
  t.end();
});

tape('arr.1 - return undefined', function (t) {
  var test = objectvalue.get(obj, 'arr.1');
  t.equal(test, undefined);
  t.end();
});

tape('arr.0 - { with: objects }', function (t) {
  var test = objectvalue.get(obj, 'arr.0');
  t.deepEqual(test, { 'with': 'objects' });
  t.end();
});

tape('arr.0.with - return objects', function (t) {
  var test = objectvalue.get(obj, 'arr.0.with');
  t.equal(test, 'objects');
  t.end();
});
