//////////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}
console.log(add(2, 4));
//////////////////////////////////////////////////////////////

function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result = add(a, result);
    count++;
  }
  return result;
}
console.log(multiply(6, 4));

///////////////////////////////////////////////////////////////

function power(x, n) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiply(x, result);
    count++;
  }
  return result;
}
console.log(power(2, 8));
console.log(power(3, 4));

///////////////////////////////////////////////////////////////

function factorial(x) {
  let count = 1;
  let result = 1;
  while (count <= x) {
    result = multiply(count, result);
    count++;
  }
  return result;
}
console.log(factorial(5));

//////////////////////////////////////////////////////////////

function fibonacci(n) {
  let count = 3;
  let result = 1;
  let a = 0;
  let b = 1;
  while (count <= n) {
    result = add(a, b);
    count++;
    a = b;
    b = result;
  }
  return result;
}
console.log(fibonacci(8));

//////////////////////////////////////////////////////////////
