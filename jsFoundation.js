/**
 * Javascript is functional scoped
 * Engine provide two phases -- creation and execution
 * while creation it checks var and () , then allocate memory to them
 * var is partially hoisted while functions are fully hoisted
 * execution enviorment provides -- global object , this, hoisting, variable enviroment, scope chain,
 * Each execution environment have hoisting, variable environment and scope chain
 * ES7 provide block scope with let and const
 * lexical scope / static scope--> it's basically available variable and data into that particular execution environment
 * dynamic scope --> scope at runtime like we use bind function which return a function which can be used later, if variable is not available in scope then it's check in scope chain and assign it's value
 * this -- it points to an object which have function as property or it points to window object.
 * this keyword is lexical scoped in arrow method, we need not to use bind for that.
 * call bind apply -> call and apply are used to call any function where apply takes array of arguments. bind() returns a function which can be called later and also used to bind with current execution environment.
 * function currying- a function takes one argument and return with internal functional call
 */

//call apply bind example
const wizard = {
  name: 'Anil',
  health: 60,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: 'Robin hood',
  health: 30,
};
console.log(archer);
console.log(wizard.heal.call(archer, 30, 23));
console.log(archer);
console.log(wizard.heal.apply(archer, [54, 21]));
console.log(archer);
const bindr = wizard.heal.bind(archer, 32, 13);
console.log(bindr());
console.log(archer);

// get max number from arr
const arr = [100, 22, 13];
function getMaxNumber(arr) {
  /* let max = arr[arr.length - 1];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max; */

  return arr.sort((a, b) => a - b).pop(arr.length);
}
console.log(getMaxNumber(arr));

const charac = {
  namex: 'Simon',
  getCharacter() {
    console.log(this);
    function xyz() {
      return this.namex;
    }
    return xyz();
  },
};
const namex = 'kalu';
const getCharNow = charac.getCharacter;
console.log(charac.getCharacter());

// function currying example with bind()
function multiply(x, y) {
  return x * y;
}
const multiplyBysix = multiply.bind(this, 6);
console.log(multiplyBysix(5));
