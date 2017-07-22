import {shallowEqual} from '../diff.js';

function objMerge(object) {
  if (shallowEqual(this, object)) {
    return this;
  }

  return {...this, ...object};
}

Object.defineProperty(Object.prototype, 'merge', {
  value: objMerge,
  writable: false,
  enumerable: false,
  configurable: false
});
