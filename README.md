## 情報工学同好会 (非公認)　公式サイト

[サイトはこちら](https://csc.nikachu.net/)

### 実行、ビルド方法
ビルドするためには環境変数ファイルが必要です。リポジトリのルートフォルダに`.env`ファイルを作ってください。
```env
API_URL=""
DONT_USE_CLIENT_MSG=""
```

#### プレビュー方法
以下のコマンドでプレビューできます。
```
$ npm i
$ node genApiData.js 　// APIをサンプルとして利用するときは実行
$ npm run dev
```

#### ビルド方法
```
$ npm run build
```

### OpenAPI仕様
OpenAPI仕様のファイルは`/public/openapi.yaml`にあります。
Redoclyを使ってHTMLを生成するには以下のコマンドをリポジトリのルートフォルダで実行してください。
```
$ npx @redocly/cli build-docs .\public\openapi.yaml --output=.\public\api.html
```
