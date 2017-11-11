 nFibonacci = (n) => {
   //1 2 3 5 8 13
  if (n <= 0) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}
 5 - 1 + 5 - 2
console.log(nFibonacci(5)); 