"use strict";
// unknown型
// 型を指定しなければいけなくなるので、anyよりも安全
// anyかunknownであればunkonwnの方がいい
let userInputa;
let userNamea;
userInputa = 5;
userInputa = "Max";
if (typeof userInputa === "string") {
  userNamea = userInputa;
}
// never型
// 関数の戻り値に設定することができる
// 値を返すことは絶対にあり得ない
function generateErrora(message: string, code: number) {
  throw { message: message, errorCode: code };
}
generateErrora("エラーが発生しました", 500);
// Watchモード
