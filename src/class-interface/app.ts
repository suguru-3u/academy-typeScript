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

abstract class Department {
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  // 静的プロパティ
  static fiscalYear = 2020;

  //   静的メソッド
  static createEmplyee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  //   抽象化
  //   メソッドの名前と引数戻り値のみ定義
  //   抽象化する際は、クラスにもabstrctを追加する必要がある
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// 抽象クラスはインスタンス化することはできない
// const accounting = new Department("d1", "Accounting");
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';
// accounting.name = "NEW NAME";

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

// 継承
class ITDepartMent extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT部門");
  }
}

const IT = new ITDepartMent("d2", ["Max"]);
IT.describe();

class AccountingDepartment extends Department {
  private lastReport: string;

  // フィールドとして扱うことができる
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値でアクセスしてください。");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Acounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log("レポート結果", this.reports);
  }

  //   オーバーライド
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log("会計部門");
  }
}

const report = new AccountingDepartment("d3", []);
// console.log(report.mostRecentReport);
report.addReport("something");

// setterはプロパティに追加するようにしようすることができる
report.mostRecentReport = "Yes";
report.printReports();
report.addEmployee("Max");
report.addEmployee("Taro");
report.addEmployee("Mani");
report.printEmployeeInformation();
report.describe();

// getterは()なしでアクセスすることができる
console.log(report.mostRecentReport);

const employee1 = Department.createEmplyee("Tanaka");
console.log(employee1, Department.fiscalYear);
