# trello_client_demo

## プロジェクト作成
``` sh
$ vue create demo-project

# プリセットの選択
#   Manually select features を選択してEnter
Vue CLI v3.9.3
? Please pick a preset:
  default (babel, eslint)
❯ Manually select features

# プロジェクトに必要な機能の選択
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◯ Babel
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
❯◯ E2E Testing

# HTML5 History モードの選択
# [HTML5 History モード | Vue Router](https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B)
#   Y: historyモードで使う
#   n: Vue Routerをhashモードで使う（デフォルト） ← 今回はこっちを選択
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)

# CSSプリプロセッサの選択
#   Sass/SCSS (with dart-sass)  ← 今回はこれを選択 (特に理由はない)
#   Sass/SCSS (with node-sass)
#   Less
#   Stylus
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are s
upported by default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus

# ESLintプリセットの選択
#   ESLint with error prevention only: エラー防止のみ ← 今回はこれを選択
#   ESLint + Airbnb config           : Airbnb設定
#   ESLint + Standard config         : 標準設定
#   ESLint + Prettier                : Prettier併用設定
? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier

# 追加のlint機能オプションの選択
#   Lint on save          : 保存時にLint実行 ← 今回はこれを選択
#   Lint and fix on commit: コミット時にLint実行
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit

# 設定ファイル設置箇所の選択
#   In dedicated config files: 専用の設定ファイル内 ← 今回はこっちを選択
#   In package.json          : package.json内
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json

# プリセット保存の選択
#   y: ここまで選択してきたことをプリセットとして保存する
#   N: 保存しない                                   ← 今回は保存しない
? Save this as a preset for future projects? (y/N)

```


## アプリケーションの起動
プロジェクト作成の最後に出てくるとおり、↓のコマンドを実行して http://localhost:8080/ を開く。

``` sh
$ cd demo-project
$ yarn serve
```


## Vuetifyの追加
``` sh
$ vue add vuetify

# プリセットの選択
? Choose a preset: (Use arrow keys)
❯ Default (recommended)         # ← 今回はこれを選択
  Prototype (rapid development)
  Configure (advanced)
```
