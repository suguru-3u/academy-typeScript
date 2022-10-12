// functionとvoid
// 変数と同様、基本型推論を使用する
function add(n1, n2) {
    return n1 + n2;
}
function printResulta(num) {
    console.log(num);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
printResulta(add(5, 12));
