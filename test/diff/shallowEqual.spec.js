import {shallowEqual} from '../../src/diff';

describe('shallowEqual', () => {
  it('should return true if params are empty objects', () => {
    const obj1 = {};
    const obj2 = {};

    expect(shallowEqual(obj1, obj2)).toEqual(true);
  });

  it('should return true if params are filled and equal', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 2};

    expect(shallowEqual(obj1, obj2)).toEqual(true);
  });

  it('should return false if params are different', () => {
    const obj1 = {a: 2, b: 2};
    const obj2 = {a: 1, b: 2};

    expect(shallowEqual(obj1, obj2)).toEqual(false);
  });

  it('should return false if one of params is nested', () => {
    const obj1 = {a: {a: 1}, b: 2};
    const obj2 = {a: 1, b: 2};

    expect(shallowEqual(obj1, obj2)).toEqual(false);
  });

  it('should return false if params are nested', () => {
    const obj1 = {a: {a: 1}, b: 2};
    const obj2 = {a: {a: 1}, b: 2};

    expect(shallowEqual(obj1, obj2)).toEqual(false);
  });

  it('should return false if one of params is null or undefined', () => {
    const obj1 = {a: 1, b: 2};

    expect(shallowEqual(obj1, null)).toEqual(false);
    expect(shallowEqual(obj1, undefined)).toEqual(false);
  });

  it('should return false if one of params is primitive', () => {
    const obj1 = {a: 1, b: 2};

    expect(shallowEqual(obj1, 10)).toEqual(false);
  });
});
