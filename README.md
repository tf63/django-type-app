# type django (仮)

![](https://github.com/tf63/type_django/actions/workflows/django.yml/badge.svg)
<img src="https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=flat"><img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat"><img src="https://img.shields.io/badge/-Docker-EEE.svg?logo=docker&style=flat"><img src="https://img.shields.io/badge/-Amazon%20AWS-232F3E.svg?logo=amazon-aws&style=flat">
![](https://img.shields.io/github/repo-size/tf63/type_django)
![](https://img.shields.io/github/languages/code-size/tf63/type_django)

<!-- ![](https://img.shields.io/tokei/lines/github/tf63/type_django) -->

### todo

- 名前を決める
- 各種設定のファイルをどこかに作りたい (データベースで設定を管理する?)
- test コードから実装する
- type.js の終了判定のエラー処理をする必要がある
- result のページは普通には遷移できないようにする? (じゃあ URL 遷移しないほうがよい?)
- nginx, gunicorn コンテナも追加する
- ゲーム画面にキーボードを表示する
- ゲームにオプションを追加する
  - コーディングスタイル等をオプションで変えられるようにする?
  - キーボード表示の有無
- TypeScript に変更する
- React を導入する

### url

- `/`: index
- `/select`: 問題を選択する

  - `/game`: ゲーム画面

  - `/result`: ゲームのリザルト画面

- `/profile`: 過去の成績一覧

### やりたいこと

- タイピングシステムに対してテスト文を生成できそう
  - ｢おちゃ｣という文に対して otilya や otya を生成
- ChatGPT で問題を作成したい
- タイプミスのデータを収集し，ミスしやすい問題を分析したい
- CI
- デザインをクレイモーフィズム (Figma)
- テスト駆動開発

### 使いたい技術

- (tailwindcss)
- Django + React
  - jQuery?
- DRF
- Firebase
- Github Actions
- AWS
- Figma
- DB 周りのこと

### Docker
コンテナの起動
```
  docker compose up -d
```

コンテナの削除
```
  docker compose down
```

コンテナのリビルド
```
  docker compose up -d --build
```

### Django (Backend)
プロジェクトの作成
```
    docker compose exec django django-admin startproject <project_name>
```

fixtureの読み込み
```
    docker compose exec django python manage.py loaddata <fixture_file>
```

fixtureファイルの作成
- fixtureファイルはテーブルの中身をそのまま置き換える
```
	docker compose exec django python make_data.py
```

superuserの作成
```
    python manage.py createsuperuser
```

### React

**各種コマンド**

プロジェクトの作成

```
    docker compose exec react yarn create vite . --template=react-ts
```

パッケージのインストール

```
    docker compose exec react yarn
```

(新規インストール)

```
    docker compose exec react npm i <パッケージ名>
```

サーバーの立ち上げ

```
    docker compose exec react yarn dev
```

**各種ライブラリ**
react-router-dom

```
    npm i react-router-dom
```

### 参考
- React (TypeScript) チュートリアル
https://zenn.dev/roiban/articles/473f9cbf2b793a

https://react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial