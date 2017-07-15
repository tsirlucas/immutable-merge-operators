import './index.js';

const object = {
    name: 'Foo',
    age: 20
};

const object2 = {
    name: 'Bar',
    age: 20
};

const object3 = {
    name: 'Foo',
    age: 20
};

const array = [1, 2, 3, 4];

const array2 = [2, 2, 3, 4, 5];

const array3 = [1, 2, 3, 4];

const arrayObj = [object, object2];

const arrayObj2 = [object, object3];

const arrayObj3 = [object, object2];

const state = {
    object: object
};

const state2 = {
    object: object2
};

const state3 = {
    object: object
};

const merged = object.merge(object2);

const merged2 = object.merge(object3);

const mergedState = state.merge({
    ...state2,
    object: state.object.merge(state2.object)
});

const mergedState2 = state.merge({
    ...state3,
    object: state.object.merge(state3.object)
});

const mergedArray = array.merge(array2);

const mergedArray2 = array.merge(array3);

const mergedArrayObj = arrayObj.merge(arrayObj2);

const mergedArrayObj2 = arrayObj.merge(arrayObj3);


//should be false
console.log(merged === object);
//should be true
console.log(merged2 === object);
//should be false
console.log(mergedArray === array);
//should be true
console.log(mergedArray2 === array);
//should be false
console.log(mergedArrayObj === arrayObj);
//should be true
console.log(mergedArrayObj2 === arrayObj);
//should be false
console.log(mergedState === state);
//should be true
console.log(mergedState2 === state);
//should be false
console.log(mergedState.object === state.object);
//should be true
console.log(mergedState2.object === state.object);