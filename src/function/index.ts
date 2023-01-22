/**
 * 関数についてbasicよりも詳細はことが書かれている
 */

// オプショナルパラメーターとデフォルトパラメーター
// ?とつけることで引数の型定義をundifindを含んだ状態にできる
function log(messsage: string, userId?: string) {
  let time = new Date().toLocaleDateString();
  console.log(time, messsage, userId || "Not signed in");
}

log("Page loaded");
log("User signed in", "da716e");

// 引数に値がない場合のデフォルト値を設定することができる
// デフォルトパラメーターであれば型が決まりコードが読みやすくなる
function log2(messsage: string, userId = "Not signed in") {
  let time = new Date().toLocaleDateString();
  console.log(time, messsage, userId);
}

log2("Page loaded");
log2("User signed in", "da716e");

// レストパラメーター
// 引数に可変長の値をリクエストする際に使用する
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sumVariadicSafe(1, 2, 3);

// thisの使われ方
// 引数にthisを指定すると関数内のthisの参照先を指定することができる。さらに型定義の恩恵も受けることが可能
function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/ ${this.getDate()}}`;
}

fancyDate.call(new Date());
