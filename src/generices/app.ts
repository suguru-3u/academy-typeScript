// ジェネリック型は汎用型とも呼ばれます。
// 追加の型情報を追加できる型
const names: Array<string> = [];
// names[0].

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました");
  }, 2000);
});

promise.then((data) => {
  data.split("");
});

// 関数の呼び出しのタイミングで型情報が動的に決まる。
// Tは構造はなんでもいいが、オブジェクトでなければならない制約
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "merge" }, { age: 290 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

// 型の制約と返り値の型の制約もtuple型で指定している
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hello"));
console.log(countAndDescribe(""));

// keyof・・・オブジェクトのKeyをしてすることができる
function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "value: " + obj[key];
}

console.log(extractAndCovert({ name: "Max" }, "name"));

// generics class
// class全体ではなく、一部の関数にだけ使用することができる
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const txteStorage = new DataStorage<string>();
txteStorage.addItem("Data1");
txteStorage.addItem("Data2");
txteStorage.addItem("Data3");
txteStorage.removeItem("Data2");
console.log(txteStorage.getItem());

// const objStorage = new DataStorage<number>();
// const obj = { name: "Max" };

// objStorage.addItem(obj);
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem(obj);
// console.log(objStorage.getItem());

// genericのユーティリティ(色々存在する)
// https://typescript-jp.gitbook.io/deep-dive/type-system/generics
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial型
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// ReadOnly
const names20221025: Readonly<string[]> = ["Max", "Anna"];
