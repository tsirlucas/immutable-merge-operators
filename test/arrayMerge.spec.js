describe('Array merge operator', () => {
  const object = {
    name: 'Foo',
    age: 20
  };

  const object2 = {
    name: 'Bar'
  };

  const object3 = {
    name: 'Foo',
    age: 20
  };

  const array = [1, 2, 3, 4];

  const array2 = [2, 2, 3];

  const array3 = [1, 2, 3, 4];

  const array4 = [1, 2, 3];

  const arrayObj = [object, null];

  const arrayObj2 = [object, object2, object3];

  const arrayObj3 = [object, null];

  it('should return same reference when parameters are equal', () => {
    const mergedArray = array.merge(array3);

    //checking reference
    expect(true).toEqual(mergedArray === array);
    expect(mergedArray).toEqual(array);
  });

  it('should return new merged array when parameters are different', () => {
    const mergedArray = array.merge(array2);
    const mergedArray2 = array2.merge(array4);
    const newMergedArray = [2, 2, 3, 4];

    //checking reference
    expect(false).toEqual(mergedArray2 === array4);
    expect(false).toEqual(mergedArray === newMergedArray);
    expect(mergedArray).toEqual(newMergedArray);
    expect(mergedArray2).toEqual(array4);
  });

  it('should use shallow diff to check array of objects', () => {
    const mergedArrayObj = arrayObj.merge(arrayObj3);
    const mergedArrayObj2 = arrayObj.merge(arrayObj2);

    const newMergedArrayObj = [object, object2, object3];

    expect(mergedArrayObj).toEqual(arrayObj);
    expect(mergedArrayObj2).toEqual(newMergedArrayObj);

    //checking references
    expect(true).toEqual(mergedArrayObj === arrayObj);
    expect(false).toEqual(mergedArrayObj2 === newMergedArrayObj);
  });
});
