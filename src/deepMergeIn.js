function deepMergeIn(path, merger) {
  let newItem = JSON.parse(JSON.stringify(this));
  let currItem = newItem;

  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (!currItem[key]) {
      currItem[key] = {};
    }
    currItem = currItem[key]
  }
  const mergedItem = merger(currItem);

  if (mergedItem === currItem) {
    return this;
  }

  //Updating newItem via reference
  currItem = Object.assign(currItem, mergedItem);

  return newItem;
}

Object.prototype.deepMergeIn = deepMergeIn;

Array.prototype.deepMergeIn = deepMergeIn;
