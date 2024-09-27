function solution(x, n) {
  let stack = [];
  let num = x;

  while (stack.length < n) {
    stack.push(num);
    num += x;
  }

  return stack;
}

let x = 4;
let n = 3;
console.log(solution(x, n));
