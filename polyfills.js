//Curry
//sum(1,2,3)()(5,6)()(8,9);
function sum(...x) {
  if (arguments.length > 1) {
    x = x.reduce((pre, curr) => {
      return (pre += curr);
    }, 0);
  }
  return function (...y) {
    if (y) {
      if (arguments.length > 1) {
        y = y.reduce((pre, curr) => {
          return pre + curr;
        }, 0);
        return sum(x + y);
      } else {
        return sum(x + y[0]);
      }
    } else {
      return x[0];
    }
  };
}

console.log(sum(1, 2, 3)(5, 6)(8, 9)());

//Promise.all
/* Promise.myall = function (values) {
  let promise = new Promise((resolve, reject) => {
    let total = 0;
    let result = [];
    values.forEach((val, index) => {
      Promise.resolve(val)
        .then((res) => {
          total++;
          result[index] = res;
          if (total == values.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
  return promise;
};

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Done!!!');
  } else {
    reject('error!!!');
  }
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Anil');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'Neerja');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Deeshu');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 750, 'Ravish');
});

Promise.allSettled([promise, promise1, promise2, promise3, promise4]).then(
  (values) => console.log(values)
);

Promise.all([promise, promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

Promise.myall([promise1, promise2, promise3]).then((values) =>
  console.log(values)
); */

//Array map method
//Find
/* Array.prototype.myFind = function (callback) {
  if (this.length <= 0) {
    return;
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let arr = [12, 43, 56, 76, 13, 43, 90, 7, 54, 12, 23, 9, 32, 43];
console.log(arr.myFind((x) => x > 100)); */

//forEach
/* Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let arr = [12, 43, 56, 76, 13, 43, 90, 7, 54, 12, 23, 9, 32, 43];
console.log(arr.myForEach((x) => x + 4));
console.log(arr);
console.log(arr.forEach((x) => x + 4));
console.log(arr); */

//Reduce
/* Array.prototype.myReduce = function (callback, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

let arr = [12, 43, 56, 76, 13, 43, 90, 7, 54, 12, 23, 9, 32, 43];
function duplicateNumber(arr) {
  return arr.myReduce((acc, curr, index, arr) => {
    if (arr.indexOf(curr) !== index && acc.indexOf(curr) < 0) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(duplicateNumber(arr)); */

//myfilter
/* Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
let arr = [12, 43, 56, 76, 13];
console.log(arr.myFilter((x) => x > 50)); */
//
/* Array.prototype.mymap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
let arr = [12, 43, 56, 76, 13];
console.log(arr.mymap((x) => x + 5)); */
