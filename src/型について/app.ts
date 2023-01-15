/**
 * 基本的に型は、any,unknown、boolean,number,bigint（大きな整数）,string,symbol,object
 * 型を定義はTypeScriptに可能な限り推論させるべき。
 */

/**
 * object
 */

let obj: object = {
  b: "x",
};

// obj.b; obj.bは存在しないとエラーが起きる。
// object型と型定義すると中身の定義は行わずにobjectであることしか判定できない
// 以下の方法であれば、エラーは発生しない

obj = {
  b: "x",
};

let obj2: { b: string } = {
  b: "x",
};

/**
 * メモ
 */

// 型を定義する際にconstを使用するとただ一つの型を表すリテラル型になる
const a = true;
