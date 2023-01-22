/**
 * 関数についてbasicよりも詳細はことが書かれている
 */

// functionとvoid
// 変数と同様、基本型推論を使用する
function add2(n1: number, n2: number): number {
  return n1 + n2;
}

function printResulta2(num: number) {
  console.log(num);
}

// function型とコールバック
function addAndHandle2(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  cd(result);
}

// addAndHandlea(10, 20, (result) => {
//   console.log(result);
// });

// 特定の関数の方定義
let combineValues: (n1: number, n2: number) => number;

// combineValues = add;

// any型なので、なんでも入れることができる
// combineValues = 5;
// 関数型だけだとどの関数でも代入できてしまう
// combineValues = printResulta;

// console.log(combineValues(8, 8));
