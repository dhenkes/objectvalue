# objectvalue

This is a small package to get (deep-) values in an object.

## How does it work?

```
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

objectvalue.get(undefined, 'two')); // Returns undefined
objectvalue.get(testObj, 'one')); // Returns two
objectvalue.get(testObj, 'two')); // Returns undefined
objectvalue.get(testObj, 'two.test')); // Returns undefined
objectvalue.get(testObj, 'deep.key')); // Returns true
objectvalue.get(testObj, 'a')); // Returns null
objectvalue.get(testObj, 'really.really.deep.key')); // Returns 123
objectvalue.get(testObj, 'arr.1')); // Returns undefined
objectvalue.get(testObj, 'arr.0')); // Returns { "with": "objects" }
objectvalue.get(testObj, 'arr.0.with')); // Returns objects
```