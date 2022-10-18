"use strict";
// オブジェクト
// プロパティを自動で型推論してくれる
// なるべく基本型推論を行う
const person = {
    name: "yota",
    age: 30,
};
console.log(person.name);
/*
   * このようなObjectの型は次のようになります。
  {
    id: string;
    price: number;
    tags: string[],
    details: {
      title: string;
      description: string;
    }
  }
  */
// Array型
const personArray = {
    name: "yota",
    age: 30,
    hobbies: ["sport", "cooking"],
};
let testArray;
for (const hobby of personArray.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
// Tuple型
const personTuple = {
    name: "yota",
    age: 30,
    hobbies: ["sport", "cooking"],
    role: [2, "author"],
};
personTuple.role = [0, "admin"];
// TupleはPUSHは許可されてしまう
personTuple.role.push("a");
// Enum型
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    // 上が1なので後続は2,3になる
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
const personEnum = {
    name: "yota",
    age: 30,
    hobbies: ["sport", "cooking"],
    role: Role.ADMIN,
};
if (personEnum.role === Role.ADMIN) {
    console.log("管理者");
}
