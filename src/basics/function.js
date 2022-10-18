"use strict";
// functionとvoid
// 変数と同様、基本型推論を使用する
function add(n1, n2) {
    return n1 + n2;
}
function printResulta(num) {
    console.log(num);
}
// function型とコールバック
function addAndHandle(n1, n2, cd) {
    const result = n1 + n2;
    cd(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// 特定の関数の方定義
let combineValues;
combineValues = add;
// any型なので、なんでも入れることができる
// combineValues = 5;
// 関数型だけだとどの関数でも代入できてしまう
// combineValues = printResulta;
console.log(combineValues(8, 8));
printResulta(add(5, 12));
