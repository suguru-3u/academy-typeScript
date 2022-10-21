/**
 * Object、Array、Tuple、enum
 */

// オブジェクト
// プロパティを自動で型推論してくれる
// なるべく基本型推論を行う
const person: {
  name: string;
  // 30しか指定することができない
  age: 30;
} = {
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

let testArray: string[];

for (const hobby of personArray.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

// Tuple型
const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  //   配列の要素の型と数を厳密に定義することができる
  role: [number, string];
  arrayObject: [{ age: number }];
  objectArray: { age: number }[];
} = {
  name: "yota",
  age: 30,
  hobbies: ["sport", "cooking"],
  role: [2, "author"],
  arrayObject: [
    {
      age: 29,
    },
  ],
  objectArray: [
    {
      age: 29,
    },
    {
      age: 29,
    },
    {
      age: 29,
    },
  ],
};

personTuple.role = [0, "admin"];
// TupleはPUSHは許可されてしまう
personTuple.role.push("a");

// Enum型
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 1,
  // 上が1なので後続は2,3になる
  READ_ONLY,
  AUTHOR,
}

const personEnum = {
  name: "yota",
  age: 30,
  hobbies: ["sport", "cooking"],
  role: Role.ADMIN,
};

if (personEnum.role === Role.ADMIN) {
  console.log("管理者");
}
