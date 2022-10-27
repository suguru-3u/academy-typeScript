/**
 * デコレータとは何か？
 * クラスが定義された際に実行される。インスタンスされた時に呼ばれるものではない
 * クラスの初期設定を行う（定義）
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
  // デコレーター関数
  return function <T extends { new (...args: any[]): { name: string } }>(
    originconstructor: T
  ) {
    return class extends originconstructor {
      constructor(..._: any[]) {
        super();
        console.log("templateを表示");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

// プロパティデコレータ
function Log(target: any, propertyName: string | Symbol) {
  console.log("Log デコレータ");
  console.log(target, propertyName);
}

// アクセサデコレータ
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Log2 デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// メソッドデコレータ
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Log3 デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// パラメーターデコレータ
function Log4(target: any, name: string | Symbol, positon: number) {
  console.log("Log4 デコレータ");
  console.log(target);
  console.log(name);
  console.log(positon);
}

class Producrt {
  // プロパティに設定した場合、クラスのプロトタイプが渡される
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWhithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(
  _: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bundFn = originalMethod.bind(this);
      return bundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "クリックしました";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);
