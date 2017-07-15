# Immutable merge operators
[![code climate](https://codeclimate.com/github/redux-observable/redux-observable/badges/gpa.svg)](https://codeclimate.com/github/tsirlucas/immutable-merge-operators)
[![build status](https://img.shields.io/travis/reactjs/redux/master.svg)](https://travis-ci.org/tsirlucas/immutable-merge-operators)
100% vanilla JS immutable merge operators that returns the same reference if 
nothing changes.

    const object = {
        name: 'Foo',
        age: 20
    };
    
    const object2 = {
        name: 'Bar',
    };
    
    const object3 = {
        name: 'Foo',
        age: 20
    };
    
    const merged = object.merge(object3); // {name: 'Foo', age: 20};
    
    const merged2 = object.merge(object2); // {name: 'Bar', age: 20};
    
    merged === object; // true
    
    merged2 === object; //false
    
# Nested objects
Just like you would do with spread or Object.assign

     const mergedState = state.merge({
                ...state3,
                object: state.object.merge(state3.object)
            });
            
# Lists
immutable-merge-operators also supports arrays and arrays of objects

OBS: A shallow comparison is used to check objects properties
    
     const array = [1, 2, 3, 4];
     const array2 = [2, 2, 3];
     
     // This also works and returns the same reference if arrays are equal
     // or the merged array if they'e not
     const mergedArray = array.merge(array2);
     
     const arrayObj = [object, object3];
     const arrayObj2 = [object, object2, object3];
     //This works as well
     arrayObj.merge(arrayObj2);

# Why not to use spread or object.assign?
Spread and object assign returns a new instance even if nothing changes, so
you can't use equality check on objects or arrays. It's not 100% functional.

# Why would I want the same reference?
When you're working with libs like react or redux, whenever the store
or your state changes the lifecycle will be triggered again and all your logics
will run, even the render (react shallow diff should handle the DOM changes, but 
not your logics). With the same reference redux won't trigger the subscribe
and you shouldComponentUpdate method will be able to use equality check
on objects and arrays.

# Why not use Immutable.js then?
Immutable.js comes with a lot of power that you may not need. Also, it turns 
your data into Immutable.JS objects that may be hard to maintain.

OBS: If you're working on a big project, please consider to use Immutable.js
once it's a larger and more secure lib.

# Why USE immutable-merge-operators?
It's 100% vanilla JS and this means that you'll use the operators on native
objects and will receive a native object as return. It's easier to maintain
and learn.

OBS: We use a adapted version of React's shallow comparison algorithm, so if
you're looking for specific updates on giant trees, you may prefer Immutable.js

# TODO
- Deep merge/update
- More and better tests