import {arrayEqual} from '../../src/diff';

describe('arrayEqual', () => {
  it('should return true if params are empty arrays', () => {
    const arr1 = [];
    const arr2 = [];

    expect(arrayEqual(arr1, arr2)).toEqual(true);
  });

  it('should return true if params are filled and equal', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(arrayEqual(arr1, arr2)).toEqual(true);
  });

  it('should return false if params are different', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(arrayEqual(arr1, arr2)).toEqual(false);
  });

  it('should return true for equals arrays of shallow objects', () => {
    const arr1 = [{a: 1, b: 2}, {a: 1, b: 3}];
    const arr2 = [{a: 1, b: 2}, {a: 1, b: 3}];

    expect(arrayEqual(arr1, arr2)).toEqual(true);
  });

  it('should return false for different arrays of shallow objects', () => {
    const arr1 = [{a: 1, b: 2}, {a: 1, b: 3}];
    const arr2 = [{a: 1, b: 2}, {a: 1, b: 4}];

    expect(arrayEqual(arr1, arr2)).toEqual(false);
  });

  it('should return false for equals arrays with nested objects', () => {
    const arr1 = [{a: 1, b: 2}, {a: {a: 1}, b: 2}];
    const arr2 = [{a: 1, b: 2}, {a: {a: 1}, b: 2}];

    expect(arrayEqual(arr1, arr2)).toEqual(false);
  });

  it('should return false for different arrays with nested objects', () => {
    const arr1 = [{a: 1, b: 2}, {a: {a: 1}, b: 2}];
    const arr2 = [{a: 1, b: 2}, {a: {a: 1}, b: 3}];

    expect(arrayEqual(arr1, arr2)).toEqual(false);
  });

  it('should be able to check null or undefined values on arrays', () => {
    const arr1 = [{a: null, b: 2}, {a: 1, b: undefined}, null, undefined];
    const arr2 = [{a: null, b: 2}, {a: 1, b: undefined}, null, undefined];
    const arr3 = [{a: null, b: 2}, {a: 2, b: undefined}, null, undefined];

    expect(arrayEqual(arr1, arr2)).toEqual(true);
    expect(arrayEqual(arr1, arr3)).toEqual(false);
  });
});
