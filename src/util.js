const isObject = (val) => val === Object(val);

const isArray = (val) => val && val.length >= 0;

const isPrimitive = (val) => !isObject(val) && !isArray(val);

const shallowEqual = (a, b) => {
    for (let key in a) if (a[key] !== b[key]) return false;
    for (let key in b) if (!(key in a)) return false;
    return true;
};

const arrayEqual = (item1, item2) => {
    if (isPrimitive(item1) || isPrimitive(item2)) {
        return item1 === item2;
    }

    return shallowEqual(item1, item2);
};

export {shallowEqual, arrayEqual};