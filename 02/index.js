function solution(str) {
  let maskedStr = [];

  [...str].reverse().forEach((el, i) => {
    if (i >= 4) {
      el = "*";
    }
    maskedStr.push(el);
  });

  return maskedStr.reverse().join("");
}

let phone_number = "027774444";
console.log(solution(phone_number));
