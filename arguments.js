function sum(a, b, c) {
  console.log(typeof arguments);
  const total = a + b + c;
  return total;
}
const result = sum(1, 23, 43, 43, 223, 32, 45, 65, 67, 878, 4);
console.log(result);
