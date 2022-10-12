// union型
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 63);
console.log(combineAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// Literal型
function combineLiteral(
  input1: number | string,
  input2: number | string,
  // 特定の文字しか入れないようにしている
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if ((resultConversion = "as-number")) {
  //     return +result;
  //   }
  return result;
}

const combineLiteralAges = combineLiteral(30, 63, "as-text");
console.log(combineLiteralAges);

const combinedLiteralNames = combineLiteral("Max", "Anna", "as-number");
console.log(combinedLiteralNames);
