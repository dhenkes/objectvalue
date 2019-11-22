exports.get = function (obj, path, keys = []) {
  if (obj === undefined) {
    return undefined;
  }

  if (path.length === 0) {
    return obj;
  }

  if (typeof obj[path] !== 'undefined') {
    return obj[path];
  }

  if (keys.length === 0) {
    keys = path.split('.');
  }

  if (keys.length === 1) {
    return undefined;
  }

  return this.get(obj[keys[0]], path.substring(keys[0].length + 1), keys.slice(1));
}

exports.set = function (obj, path, value) {
  if (!obj) {
    obj = {};
  }

  if (typeof path !== 'string' || path.length === 0) {
    return obj;
  }

  const index = path.indexOf('.');
  const key = (index > -1 ? path.substring(0, index) : path);

  if (typeof obj[key] === 'undefined') {
    if (Number.isInteger(Number(key)) && Array.isArray(obj) === false) {
      obj = [];
    }
  }

  if (index === -1) {
    obj[key] = value;
    return obj;
  }

  obj[key] = this.set(obj[key], path.substring(key.length + 1), value);
  return obj;
}
