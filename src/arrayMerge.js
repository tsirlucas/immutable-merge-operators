import {arrayEqual} from './diff';

Array.prototype.merge = function (newArray) {
  const array = this;
  if (this.length !== newArray.length) return Object.assign([], array, newArray);

  if (!arrayEqual(array, newArray)) return Object.assign([], array, newArray);

  return this;
};
