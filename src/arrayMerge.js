import {arrayEqual} from './util';

Array.prototype.merge = function (newArray) {
    const array = this;
    if (this.length !== newArray.length) return Object.assign([], array, newArray);

    for (let key in newArray) {
        if (!arrayEqual(array[key], newArray[key])) return Object.assign([], array, newArray);
    }

    return this;
};