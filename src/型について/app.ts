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

// 以下の型定義はリテラル型にはならない。
// オブジェクトはミュータブルであり、値の変更が発生することをTypeScriptは知っているから
const obj3 = {
  b: 12,
};

// cはstringの可能性があることを宣言している（undefindでも可能）
// keyはbooleanである数値プロパティを任意の数だけ持つことを宣言している
// readonlyは読み取り専用を宣言
let d: {
  b: number;
  c?: string;
  // [key:T]:Uの構文はインデックスシグネチャと言われ、型(T)はnumberかstringでなくてはならない
  [key: number]: boolean;
  readonly name: string;
};

d = {
  b: 1,
  c: "a",
  10: true,
  20: false,
  name: "taro",
};

// オブジェクトリテラルには空のオブジェクトを型を宣言できるが、扱いづらいので使用しないようにする。

/**
 * メモ
 */

// 型を定義する際にconstを使用するとただ一つの型を表すリテラル型になる
const a = true;
