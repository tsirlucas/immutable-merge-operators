import {isArray} from '../../src/util';

describe('isArray', () => {
  it('should return true if param is filled array', () => {
    const arr = [1, 2];

    expect(isArray(arr)).toEqual(true);
  });

  it('should return true if param is empty array', () => {
    // strings are arrays in js and we will respect that
    const emptyArr = [];

    expect(isArray(emptyArr)).toEqual(true);
  });

  it('should return false if param is null or undefined', () => {
    const nll = null;
    const undf = undefined;

    expect(isArray(nll)).toEqual(false);
    expect(isArray(undf)).toEqual(false);
  });

  it('should return false if param is number', () => {
    const number = 10;

    expect(isArray(number)).toEqual(false);
  });

  it('should return true if param is string', () => {
    // strings are arrays in js and we will respect that)
    const strng = 'foo bar';

    expect(isArray(strng)).toEqual(true);
  });

  it('should return false if param is object', () => {
    const obj = {0: 0};

    expect(isArray(obj)).toEqual(false);
  });
});
