import {arrayEqual} from './util';

Array.prototype.merge = function (array) {
    if (this.length !== array.length) return [...this, ...array];

    for (let key in array) {
        if (!arrayEqual(this[key], array[key])) return [...this, ...array];
    }

    return this;
};