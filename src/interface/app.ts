// インターフェース
// オブジェクトの構造を定義
// typeでも使用することができる
// インタフェースを使用することでオブジェクト形式で定義していることを定義していることが伝わる。

// インターフェイスは抽象クラスと違い、実装がない。
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, private age: number) {}

  greet(name: string) {
    console.log(name, "Hi");
  }
}

let user1: Greetable;

user1 = new Person("Max", 18);
