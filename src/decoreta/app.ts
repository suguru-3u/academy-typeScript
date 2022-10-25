/**
 * デコレータとは何か？
 */
// シンタックスシュガー
// クラスが定義された時に実行される
// デコレータファクトリー（実行時に引数を与えカスタマイズできるようにする？）
function Logger(logString: string) {
  console.log("Logger -ファクトリ");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// これがメタプログラミング！！
// 追加しなければ実行されない
function WithTemplate(template: string, hookId: string) {
  // 「 _ 」引数は受け取るけど使用しないことを宣言している
  console.log("template ファクトリー");
  return function (constructor: any) {
    console.log("templateを表示");
    const hookEl = document.getElementById(hookId);
    const p = new Personhuman();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// 複数のデコレータを使用することができる（デコレータファクトリーから実行され、その後にテンプレとファクトリが実行される...下から上に実行される）
@Logger("ログ出力中 - Person")
@WithTemplate("<h1>Person</h1>", "app")
class Personhuman {
  name = "Max";

  constructor() {
    console.log("Person Class Create");
  }
}

const per = new Personhuman();
