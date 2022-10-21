// let & const
const userName = "Max";
let age = 30;

age = 29;

// allow function
const addfunction = (a: number) => a + 1;
console.log(addfunction(3));

// defaultで引数を指定、全てデフォルトの引数を指定するか一番右側にしかデフォルト引数を設定しない
const addDefaultfunction = (a: number = 1) => a + 1;
console.log(addDefaultfunction());

// スプレッドオペレータ
// 配列やオブジェクトをリストとして取り出し、個別の値として代入する
const sports = ["soccer", "tenneis", "カバディ", "basetball", "baseball"];
const sports2 = ["soccer", "tenneis", "baseball"];

console.log(sports2);
sports2.push(...sports);
console.log(sports2);

const personObj = {
  firstname: "Max",
  agea: 30,
};

// ポインターをコピー
const personObjCopy = personObj;

// 値をコピーし新しいオブジェクトを作成（この時もスプレットオペレータを使用することができる）
const personObjCopy2 = {
  ...personObj,
};

// Rest Parameters（引数を配列として使用することができる）
const addRestfunction = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = addRestfunction(1, 4, 5, 6, 7);

// 分割代入（配列やオブジェクトを要素ごとに取得することが可能）
const [sport1, sport2, ...sportss] = sports;
console.log(sport1, sport2, sportss); // "soccer", "tenneis", ["カバディ", "basetball", "baseball"]

const { firstname, agea } = personObj;
