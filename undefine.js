/**
 * 8 ways to get undefine;
 * 1. variable that  is not initialized will give undefine
 * 2. function with no return
 * 3. parameters that is not passed will be undefine
 * 4. if return has nothing on that right side will return undefine
 */
let first;
// console.log(first);

function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
// third(3, 4);

function noNegetive(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegetive(5, -7));
