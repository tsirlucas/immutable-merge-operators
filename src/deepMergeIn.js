function deepMergeIn(path, merger) {
  let newItem = JSON.parse(JSON.stringify(this));
  let currItem = newItem;
  const lastKey = path[path.length - 1];

  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (!currItem[key]) {
      currItem[key] = {};
    }
    
    if (i < path.length - 1) {
      currItem = currItem[key];
    }
  }
  const mergedItem = merger(currItem[lastKey]);

  if (mergedItem === currItem[lastKey]) {
    return this;
  }

  //Updating newItem via reference
  currItem[lastKey] = Object.assign(currItem[lastKey], mergedItem);

  return newItem;
}

Object.prototype.deepMergeIn = deepMergeIn;

Array.prototype.deepMergeIn = deepMergeIn;
