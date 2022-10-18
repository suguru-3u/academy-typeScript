"use strict";
class Department {
    // コメントのような書き方も存在するが、この書き方も存在する
    // 読み取り専用には、readonlyを使用することで読みとり専用にすることができる
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // JavaScriptにはprivate,publicの概念はないのでエラーが起きてもコンパイルすれば動いてしまう
        //   private id: number;
        //   private name: string;
        this.emplyees = [];
    }
    //   constructor(n: string) {
    //     this.name = n;
    //   }
    // thisはそのオブジェクトの呼び出し責任をさす
    // describeを実行した際に、thisは常にdescribeクラスを参照するように指定敷いている
    describe() {
        console.log("Department", this.id, this.name);
    }
    addEmplyee(emplyee) {
        this.emplyees.push(emplyee);
    }
    printEmplyeeInfo() {
        console.log(this.emplyees);
    }
}
const department = new Department("d1", "高島屋");
console.log(department);
department.describe();
department.addEmplyee("Takashi");
department.addEmplyee("Takashi");
department.printEmplyeeInfo();
// const accountCopy = { name: "Copy Department", describe: department.describe };
// thiisはaccountCopyを参照
// accountCopy.describe();
