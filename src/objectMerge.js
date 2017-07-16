import {shallowEqual} from './util.js';

Object.prototype.merge = function (object) {
  if (shallowEqual(this, object)) {
    return this;
  }

  return {...this, ...object};
};
