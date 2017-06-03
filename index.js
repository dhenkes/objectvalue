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
