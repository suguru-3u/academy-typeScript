class Department {
  // JavaScriptにはprivate,publicの概念はないのでエラーが起きてもコンパイルすれば動いてしまう
  //   private id: number;
  //   private name: string;
  private emplyees: string[] = [];

  // コメントのような書き方も存在するが、この書き方も存在する
  // 読み取り専用には、readonlyを使用することで読みとり専用にすることができる
  constructor(private readonly id: string, public name: string) {}
  //   constructor(n: string) {
  //     this.name = n;
  //   }

  // thisはそのオブジェクトの呼び出し責任をさす
  // describeを実行した際に、thisは常にdescribeクラスを参照するように指定敷いている
  public describe(this: Department) {
    console.log("Department", this.id, this.name);
  }

  public addEmplyee(emplyee: string) {
    this.emplyees.push(emplyee);
  }

  public printEmplyeeInfo() {
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
