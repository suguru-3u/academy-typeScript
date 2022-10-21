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

// *** Type Guard ***
function addTypeGuard(a: Combinablea, b: Combinablea) {
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
