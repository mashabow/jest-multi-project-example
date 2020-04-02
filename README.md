# jest-multi-project-example

[Jest の `projects` オプション](https://jestjs.io/docs/en/configuration#projects-arraystring--projectconfig)を使って、単体テスト用の設定 `jest.unit.config.js` と E2E テスト用の設定 `jest.e2e.config.js` を分けた例

## CLI から実行する

```console
すべてのテストを一気に実行
$ jest

単体テストをすべて実行
$ jest --projects jest.unit.config.js

E2E テストをすべて実行
$ jest --projects jest.e2e.config.js

テストファイルを指定して実行（この場合、--projects の指定は不要）
$ jest src/foo.unit.js
$ jest src/foo.e2e.js
```

## VS Code から手軽に実行する

単体／E2E どちらであっても、[VS Code の Jest Runner 拡張](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) がそのまま動きます。べんり。

単体テスト

![単体テスト](https://user-images.githubusercontent.com/6268183/78237419-45437300-7516-11ea-81b0-88ac054276f6.gif)

E2E テスト

![E2E テスト](https://user-images.githubusercontent.com/6268183/78237673-9bb0b180-7516-11ea-880f-8e0d7637a8eb.gif)
