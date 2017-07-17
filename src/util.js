export const isObject = (val) => (val === Object(val)) && !(val.length >= 0);

export const isArray = (val) => (val && val.length >= 0) || false;

export const isPrimitive = (val) => !isObject(val) && !isArray(val);

export default isPrimitive;
