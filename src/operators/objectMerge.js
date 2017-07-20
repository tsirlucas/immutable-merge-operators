import {shallowEqual} from '../diff.js';

Object.prototype.merge = function (object) {
  if (shallowEqual(this, object)) {
    return this;
  }

  return {...this, ...object};
};
