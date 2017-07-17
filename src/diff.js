import {isPrimitive} from './util';

const shallowEqual = (a, b) => {
  if (isPrimitive(a) || isPrimitive(b)) return a === b;
  for (let key in a) if (a[key] !== b[key]) return false;
  for (let key in b) if (!(key in a)) return false;
  return true;
};

const arrayEqual = (arr1, arr2) => {
  for (let key in arr2) {
    if (isPrimitive(arr1[key]) || isPrimitive(arr2[key])) {
      if (arr1[key] !== arr2[key]) return false;
    }

    if (!shallowEqual(arr1[key], arr2[key])) return false;
  }
  return true
};

export {shallowEqual, arrayEqual};
