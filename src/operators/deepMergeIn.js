const deepClone = require('lodash.clonedeep');

function deepMergeIn(path, merger) {
  let newItem = deepClone(this);
  let currItem = newItem;
  const lastKey = path[path.length - 1];


  // Getting last item on path
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!currItem[key]) {
      currItem[key] = {};
    }
    currItem = currItem[key];
  }


  // Merging item
  const mergedItem = merger(currItem[lastKey]);

  // Checking reference
  if (mergedItem === currItem[lastKey]) {
    return this;
  }

  // If path object is not undefined, should return merged
  if (!currItem[lastKey]) {
    // Updating newItem via reference
    currItem[lastKey] = mergedItem;
    return newItem;
  }

  // Updating newItem via reference
  currItem[lastKey] = Object.assign(currItem[lastKey], mergedItem);

  return newItem;
}

Object.defineProperty(Object.prototype, 'deepMergeIn', {
  value: deepMergeIn,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(Array.prototype, 'deepMergeIn', {
  value: deepMergeIn,
  writable: false,
  enumerable: false,
  configurable: false
});
