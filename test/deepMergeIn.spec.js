describe('Object merge operator', () => {
  const object = {
    object2: {
      object3: {}
    }
  };

  const array = [
    [
      []
    ]
  ];

  const object2 = {
    object2: {
      object3: {
        name: 'Foo',
        age: 20
      }
    }
  };

  const array2 = [
    [
      [1, 2, 3, 4]
    ]
  ];

  const object3 = {
    name: 'Bar',
    age: 20
  };

  const array3 = [2, 2, 3];

  const emptyObj = {};
  const emptyArr = [];

  it('should return same reference when nothing changes', () => {
    const merged = object.deepMergeIn(
      ['object2', 'object3'],
      (item) => item.merge(emptyObj)
    );

    //checking reference
    expect(true).toEqual(merged === object);
  });

  it('should return same reference when nothing changes on arrays', () => {
    const mergedArr = array.deepMergeIn(
      [0, 0],
      (item) => item.merge(emptyArr)
    );

    //checking reference
    expect(true).toEqual(mergedArr === array);
  });

  it('should return new merged instance when something changes', () => {
    const merged = object2.deepMergeIn(
      ['object2', 'object3'],
      (item) => item.merge(object3)
    );

    const newMerged = {
      object2: {
        object3: {
          name: 'Bar',
          age: 20
        }
      }
    };

    //checking reference
    expect(false).toEqual(merged === object);
    expect(merged).toEqual(newMerged);
  });

  it('should return new merged instance when something changes on arrays', () => {
    const mergedArr = array2.deepMergeIn(
      [0, 0],
      (item) => item.merge(array3)
    );

    const newMergedArr = [
      [
        [2, 2, 3, 4]
      ]
    ];

    //checking reference
    expect(false).toEqual(mergedArr === array2);
    expect(mergedArr).toEqual(newMergedArr);
  });

  it('should return new items when path doesnt exist', () => {
    const merged = emptyObj.deepMergeIn(
      ['object2', 'object3'],
      (item) => item.merge(object3)
    );

    const newMerged = {
      object2: {
        object3: {
          name: 'Bar',
          age: 20
        }
      }
    };

    //checking reference
    expect(false).toEqual(merged === emptyObj);
    expect(merged).toEqual(newMerged);
  });

  it('should return new items when path doesnt exist on arrays', () => {
    const mergedArr = emptyArr.deepMergeIn(
      [0, 0],
      (item = []) => item.merge(array3)
    );

    const newMergedArr = [
      {
        0: [2, 2, 3]
      }
    ];

    //checking reference
    expect(false).toEqual(mergedArr === emptyArr);
    expect(mergedArr).toEqual(newMergedArr);
  });

  it('should return pipeble items', () => {
    const merged = emptyObj
      .deepMergeIn(
        ['object2', 'object3'],
        (item) => item.merge({a: 1})
      )
      .deepMergeIn(
        ['object4', 'object5'],
        (item) => item.merge({b: 2})
      );

    const newMerged = {
      object2: {
        object3: {
          a: 1
        }
      },
      object4: {
        object5: {
          b: 2
        }
      }
    };

    //checking reference
    expect(merged).toEqual(newMerged);
  });
});
