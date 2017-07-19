import deepClone from 'lodash.clonedeep';

function deepMergeIn(path, merger) {
  let newItem = deepClone(this);
  let currItem = newItem;
  const lastKey = path[path.length - 1];

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!currItem[key]) {
      currItem[key] = {};
    }
    currItem = currItem[key];
  }

  const mergedItem = merger(currItem[lastKey]);

  if (mergedItem === currItem[lastKey]) {
    return this;
  }

  if (!currItem[lastKey]) {
    currItem[lastKey] = mergedItem;
    return newItem;
  }

  //Updating newItem via reference
  currItem[lastKey] = Object.assign(currItem[lastKey], mergedItem);

  return newItem;
}

Object.prototype.deepMergeIn = deepMergeIn;

Array.prototype.deepMergeIn = deepMergeIn;
