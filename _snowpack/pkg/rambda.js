function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

const _isArray = Array.isArray;

const _keys = Object.keys;

function mapArray(fn, list, isIndexed = false) {
  let index = 0;
  const willReturn = Array(list.length);

  while (index < list.length) {
    willReturn[index] = isIndexed ? fn(list[index], index) : fn(list[index]);
    index++;
  }

  return willReturn;
}

function mapObject(fn, obj) {
  let index = 0;

  const keys = _keys(obj);

  const len = keys.length;
  const willReturn = {};

  while (index < len) {
    const key = keys[index];
    willReturn[key] = fn(obj[key], key, obj);
    index++;
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);
  if (list === undefined) return [];
  if (_isArray(list)) return mapArray(fn, list);
  return mapObject(fn, list);
}

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable');
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }

  return acc;
}

const reduce = curry(reduceFn);

function sum(list) {
  return list.reduce((prev, current) => prev + current, 0);
}

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

function pluck(property, list) {
  if (arguments.length === 1) return _list => pluck(property, _list);
  const willReturn = [];
  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property]);
    }
  }, list);
  return willReturn;
}

const product = reduce(multiply, 1);

export { pluck, sum };
