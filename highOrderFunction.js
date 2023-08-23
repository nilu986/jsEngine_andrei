const multiply = (x) => {
  return (y) => {
    return x * y;
  };
};

const multiplyBysix = multiply(6);
console.log(multiplyBysix(7));
