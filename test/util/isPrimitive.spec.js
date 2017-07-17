import {isPrimitive} from '../../src/util';

describe('isPrimitive', () => {
  it('should return true if param is number', () => {
    expect(isPrimitive(10)).toEqual(true);
  });

  it('should return true if param is null or undefined', () => {
    expect(isPrimitive(null)).toEqual(true);
    expect(isPrimitive(undefined)).toEqual(true);
  });

  it('should return false if param is string', () => {
    // strings are arrays in js and we will respect that
    expect(isPrimitive('foo bar')).toEqual(false);
  });

  it('should return false if param is object', () => {
    expect(isPrimitive({})).toEqual(false);
  });

  it('should return false if param is array', () => {
    expect(isPrimitive([])).toEqual(false);
  });

  it('should return false if param is function', () => {
    const func = () => null;

    const func2 = function () {};

    expect(isPrimitive(func)).toEqual(false);
    expect(isPrimitive(func2)).toEqual(false);
  });
});
