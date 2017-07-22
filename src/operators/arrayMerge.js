import {arrayEqual} from '../diff';

function arrayMerge(newArray) {
  const array = this;
  if (this.length !== newArray.length) return Object.assign([], array, newArray);

  if (!arrayEqual(array, newArray)) return Object.assign([], array, newArray);

  return this;
}

Object.defineProperty(Array.prototype, 'merge', {
  value: arrayMerge,
  writable: false,
  enumerable: false,
  configurable: false
});
