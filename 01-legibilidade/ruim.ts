function c(a: number[], b: number) {
  let r = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      r += a[i];
    }
  }
  return r;
}

const x = [10, 5, 20, 8, 30];
const y = 10;

console.log(c(x, y));