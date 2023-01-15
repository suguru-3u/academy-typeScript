## プロジェクトの開始の仕方

1. node.js 公式サイトから node をインストール(https://nodejs.org)
2. npm init で npm プロジェクトを作成する。
3. TSC,TSLint および、Node.js 用の型宣言をインストールする。
   > npm install --save-dev typescript tslint @types/node
4. tsconfig.json をルートディレクトリに作成し、コンパイルの設定を定義する。
5. tslint.json のファイルを作成し、コーディングスタイルの規約を行う。
   > ./node_modules/.bin/tslint --init
