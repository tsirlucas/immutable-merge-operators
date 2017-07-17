import {isObject} from '../../src/util';

describe('isObject', () => {
  it('should return true if param is object', () => {
    expect(isObject({})).toEqual(true);
  });

  it('should return false if param is null or undefined', () => {
    expect(isObject(null)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });

  it('should return false if param is number', () => {
    expect(isObject(10)).toEqual(false);
  });

  it('should return false if param is string', () => {
    expect(isObject('foo bar')).toEqual(false);
  });

  it('should return false if param is array', () => {
    expect(isObject([1, 2, 3])).toEqual(false);
  });

  it('should return false if param is empty array', () => {
    expect(isObject([])).toEqual(false);
  });
});
