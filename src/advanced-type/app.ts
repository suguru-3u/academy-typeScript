// *** 交差型（インターフェースでも使用することができる）***

// Object type
type Admin = {
  name: string;
  privileges: string[];
};

type Emplyee = {
  name: string;
  startDate: Date;
};

// 型の合体
type ElevatedEmplyee = Admin & Emplyee;
const el: ElevatedEmplyee = {
  name: "tarou",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(el);

// union type
type Combinablea = string | number;
type Numiric = number | boolean;

// 共通しているnumber型のみの方になる
type Universal = Combinablea & Numiric;

// *** function overload ***
// 既存の関数の勝って意義を上書きして型定義できるようにしている
function addTypeGuard(a: number, b: number): number;
function addTypeGuard(a: string, b: string): string;

// *** Type Guard ***
function addTypeGuard(a: Combinablea, b: Combinablea): Combinablea {
  // typeによって判定
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnkownEmplyee = Emplyee | Admin;

function printEmplyeeInfomartion(emp: UnkownEmplyee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  //   in を使用しオブジェクトの中身が存在しているか確認を行っている
  if ("startDate" in emp) {
    console.log("Privileges " + emp.startDate);
  }
}

printEmplyeeInfomartion(el);

class Car {
  drive() {
    console.log("driving now...");
  }
}

class Truck {
  drive() {
    console.log("driving now...");
  }
  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   inを使用しても行える
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10000);
  }
}

useVehicle(v1);
useVehicle(v2);

// *** Descriminated Union ***
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 1000 });
moveAnimal({ type: "horse", runningSpeed: 500 });

// *** Type Casting ***
// 下のやり方はReactでは使用できない asがおすすめ;
// const userInputElemetn = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElemetn = document.getElementById(
  "user-input"
) as HTMLInputElement;

userInputElemetn.value = "こんにちわ!!!";

// *** index type ***
interface ErrorContainer {
  // プロパティ名の定義,プロパティの名前と数はわからないが値は文字列であることを定義している
  [key: string]: string;
  // index trypeがあるので、number typeは定義できない
  // id: number;
}

const errorBag: ErrorContainer = {
  email: "正しいメールアドレスではありません",
  username: "ユーザー名が正しくありません",
};

// *** function pverload ***
const result = addTypeGuard("Hello", "Max");
result.split(" ");

// *** Optinal Chaining ***
// expmale：DBから値を取得したCase
// プロパティが存在するかわからない時に使用する
const fetchUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    desctiption: "TypeScript",
  },
};

// jobが存在しているか確認し、存在する場合はtileにアクセスする
console.log(fetchUserData.job?.title);

// *** Nullish Coalescing Opertor ***
// 値がnullかどうかわからない場合
const userInput = null;
// userInputだった場合、別の値を入力できるようにする
// 以下二つの方法で試すことができる
// これは、null or undefined or 空文字の判定を行うことができる
// const storeData = userInput || "DEFALUT";
// これは、null or undefinedの判定を行うことができる
const storeData = userInput ?? "DEFALUT!";
console.log(storeData);
