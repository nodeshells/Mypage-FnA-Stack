# FnA-Stack

## 説明
 Firebaseの練習がてらマイページを作っていこうと思います。
 最終的に簡易CMSみたいな感じで実装出来るといいなと思っています。

## Japanese README:
### 特色
    Firebase & Angular8 & Ionicで作るWebサービスです。
    コーディング規約としてTslint-config-semistandardを使用しています。
    フロントエンドはAngular8で実装し、バックエンドを全てFirebaseで実装します。

### デザインフレームワークのドキュメント
    Ionic
    https://ionicframework.com/docs
    
### 初回セットアップ(Node.jsはインストール済みとする)
1.firebase-toolsをglobalにインストール
 
    npm install -g firebase-tools

2.Typescriptをglobalにインストール

    npm install -g typescript

3.Tslintをglobalにインストール

    npm install -g tslint

4.src/app/environments/environments.tsに環境を設定する

    参照サイト
    https://qiita.com/Yamamoto0525/items/fb23707831ff6d181544

    
    任意で入力:
    src/index.htmlにGoogleAnalyticsのIDがあるので変更してください。
    または、コードから削除してください。
    

5.firebaseにログイン

    firebase login

6.Git Cloneしたフォルダ直下でnpm install

    npm install

7.functionsフォルダに移動した後にnpm install

    npm install

    
### よく使用するコマンド一覧
1.Expressサーバをビルド&ブート&ng serveコマンドの実行。

    npm run start
    
2.ng serveコマンドを単体で実行する。

    npm run start:client
    
3.Expressサーバを単体でブートする。
    
    npm run start:server
    
4.ExpressサーバとAngularをビルドしてdistフォルダにアウトプットする。
    
    npm run build
  
5.Angularだけをビルドしてdistフォルダにアウトプットする。
    
    npm run build:client    
      
6.Expressサーバだけをビルドしてdistフォルダにアウトプットする。(Angularのビルドは基本的に長いので、サーバだけビルドしたい時はこっちを使うと効率的)
     
    npm run build:server
    
7.ExpressサーバとAngularをビルド後、Expressサーバをブートする。(localhost:3000でアクセス可能)
    
    npm run buildRun
  
8.firebaseにデプロイする。
    
    npm run deploy

9.firebaseにて公開しているページを非公開にする。
    
    npm run hosting:kill
  

  
