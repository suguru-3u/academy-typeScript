/**
 * TypeScriptのProjectについて
 */

// tsc --init このコマンドでTypeScriptのプロジェクトであることを伝える
// tsc のコマンドだけでプロジェクト全体のコンパイルを行うこともできる
// Watchモードも使用できる

// Watchモード プログラムを監視し、変更が合った場合自動的に検知する
// tsc 対象ファイル --watch で実行可能 --w　でもOK
// TypeScriptでプログラムを作っていること = ブラウザ向けに作っているとは限らない。
// このことをTypeScriptに指定してあげる必要がある。
let text = "abc";

console.log(text);

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("click");
});

console.log("test");
