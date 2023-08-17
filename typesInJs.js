/**
 * There are saven types -- 5 under premitive - number, boolean, string, undefined, null, Symbol, 3 are non premitive-- Object(array, function)
 * Premitive are immutable while non-premitives are mutable
 * Primitive are pass by value while Non-primitives are pass by reference.
 * If we want to shallow clone a new one without old reference then for Array-- we need [].concat(copying arr), for Object --> Object.assign({}, obj), {...obj}
 * Deep cloning -- JSON.parse(JSON.stringify(obj))
 * Difference null and undefined --> null absenece of value, undefined is absence of defination
 * Array and function are object type under the hood while typeof operator gives function as type
 * == is used for type coercion in javscript which converts other value in same type.
 */

// compare two objects
console.log('types');
let obj1 = {
  x: 'axe',
  y: 'why',
  z: {
    a: 'ani',
    b: {
      c: 'c',
    },
  },
};
let obj2 = {
  x: 'axe',
  y: 'why',
  z: {
    a: 'ani',
    b: {
      c: 'c',
    },
  },
};
let obj3 = obj2;
console.log(
  JSON.parse(JSON.stringify(obj1)) === JSON.parse(JSON.stringify(obj2))
);
console.log(
  JSON.parse(JSON.stringify(obj3)) === JSON.parse(JSON.stringify(obj2))
);
console.log(Object.entries(obj1));
console.log(Object.entries(obj2));
console.log(
  Object.entries(obj1).sort().toString() ===
    Object.entries(obj2).sort().toString()
);
