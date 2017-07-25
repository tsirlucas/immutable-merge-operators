function getMerged(tree, path, merger, lastKey) {
  let currItem = tree;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!currItem[key]) {
      const mergedItem = merger();
      return {item: mergedItem, changed: true};
    }
    currItem = currItem[key];
  }

  const mergedItem = merger(currItem[lastKey]);

  return {item: mergedItem, changed: mergedItem !== currItem[lastKey]};
}

function constructTrie(tree, merged, lastKey, path) {
  const newItem = Object.assign(tree.constructor(), tree);
  let currItem = newItem;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!currItem[key]) {
      currItem[key] = {};
    } else {
      currItem[key] = Object.assign(currItem[key].constructor(), currItem[key]);
    }
    currItem = currItem[key];
  }

  currItem[lastKey] = merged.item;

  return newItem;
}

function deepMergeIn(path, merger) {
  let currItem = this;
  const lastKey = path[path.length - 1];

  // check if merge changes something
  const merged = getMerged(currItem, path, merger, lastKey);

  // if reference does'nt change, return same(this)
  if (merged && !merged.changed) {
    return this;
  }

  // if changes, object assign everything till the item and change it
  // this way only the path will be changed (Immutable.js trie concept)
  return constructTrie(this, merged, lastKey, path);
}

Object.defineProperty(Object.prototype, 'deepMergeIn', {
  value: deepMergeIn,
  writable: true,
  enumerable: false,
  configurable: true
});

Object.defineProperty(Array.prototype, 'deepMergeIn', {
  value: deepMergeIn,
  writable: true,
  enumerable: false,
  configurable: true
});
