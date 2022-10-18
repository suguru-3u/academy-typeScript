"use strict";
// let & const
const userName = "Max";
let age = 30;
age = 29;
// allow function
const addfunction = (a) => a + 1;
console.log(addfunction(3));
// defaultで引数を指定、全てデフォルトの引数を指定するか一番右側にしかデフォルト引数を設定しない
const addDefaultfunction = (a = 1) => a + 1;
console.log(addDefaultfunction());
// スプレッドオペレータ
// 配列やオブジェクトをリストとして取り出し、個別の値として代入する
const sports = ["soccer", "tenneis"];
const sports2 = ["soccer", "tenneis", "baseball"];
sports2.push(...sports2);
const personObj = {
    firstname: "Max",
    agea: 30,
};
// ポインターをコピー
const personObjCopy = personObj;
// 値をコピーし新しいオブジェクトを作成
const personObjCopy2 = Object.assign({}, personObj);
// Rest Parameters
const addRestfunction = (...numbers) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = addRestfunction(1, 4, 5, 6, 7);
// 分割代入
const [sport1, sport2, ...sportss] = sports;
console.log(sport1, sport2, ...sportss);
const { firstname, agea } = personObj;
