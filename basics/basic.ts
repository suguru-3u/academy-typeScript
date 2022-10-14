// 引数の型指定
// JSでも」typeofを使用すれば型定義を行うことができる
// ランタイム上ではTypeScriptは何もしない
// プリミティブ型
function addNumber(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 7;

const numberResult = addNumber(number1, number2);
console.log(numberResult);

function addBoolen(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

const printResult = true;
const resultPhrase = "Result: ";

addBoolen(number1, number2, printResult, resultPhrase);
