/**
 * Class,abstract,extends about
 */

abstract class Department {
  // JavaScriptにはprivate,publicの概念はないのでエラーが起きてもコンパイルすれば動いてしまう
  //   private id: number;
  //   private name: string;
  private emplyees: string[] = [];

  // 静的プロパティ
  static fiscalYear = 2020;

  //   静的メソッド
  static createEmplyee(name: string) {
    return { name: name };
  }

  // コメントのような書き方も存在するが、この書き方も存在する
  // 読み取り専用には、readonlyを使用することで読みとり専用にすることができる
  constructor(private readonly id: string, public name: string) {}
  //   constructor(n: string) {
  //     this.name = n;
  //   }

  // 抽象化
  // メソッドの名前と引数戻り値のみ定義
  // 抽象化する際は、クラスにもabstrctを追加する必要がある
  // thisはそのオブジェクトの呼び出し責任をさす
  // describeを実行した際に、thisは常にdescribeクラスを参照するように指定敷いている
  abstract describe(this: Department): void;

  public addEmplyee(emplyee: string) {
    this.emplyees.push(emplyee);
  }

  public printEmplyeeInfo() {
    console.log(this.emplyees);
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

  private static instace: AccountingDepartment;

  // getter
  // フィールドとして扱うことができる
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値でアクセスしてください。");
    }
    this.addReport(value);
  }

  // デザインパターン
  // シングルトンパターン
  // privateをするとnewでインスタンスを作ることができなくなる
  private constructor(id: string, private reports: string[]) {
    super(id, "Acounting");
    this.lastReport = reports[0];
  }

  static getInctance() {
    if (this.instace) {
      return this.instace;
    }

    this.instace = new AccountingDepartment("d4", []);
    return this.instace;
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
    console.log("田中");
  }

  describe() {
    console.log("会計部門");
  }
}

const report = AccountingDepartment.getInctance();
// console.log(report.mostRecentReport);
report.addReport("something");

// setterはプロパティに追加するようにしようすることができる
report.mostRecentReport = "Yes";
report.printReports();
report.addEmployee("Max");
report.addEmployee("Taro");
report.addEmployee("Mani");
report.printEmplyeeInfo();
report.describe();

// getterは()なしでアクセスすることができる
console.log(report.mostRecentReport);

const employee1 = Department.createEmplyee("Tanaka");
console.log(employee1, Department.fiscalYear);
