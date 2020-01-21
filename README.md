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

3.src/app/environments/environments.tsに環境を設定する

    参照サイト
    https://qiita.com/Yamamoto0525/items/fb23707831ff6d181544
        
    任意で入力:
    src/index.htmlにGoogleAnalyticsのIDがあるので変更してください。
    または、コードから削除してください。
    
4.firebaseにログイン

    firebase login

5.Git Cloneしたフォルダ直下でnpm install

    npm install

6.functionsフォルダに移動した後にnpm install

    cd functions
    npm install

    
### よく使用するコマンド一覧
1.ng serveを実行する。

    npm run start
    
2.ng serveコマンドを単体で実行する。

    npm run start:client
    
4.Angularをビルドしてwwwフォルダにアウトプットする。
    
    npm run build:client
       
5.firebaseにデプロイする。
    
    npm run deploy

6.firebaseにて公開しているページを非公開にする。
    
    npm run hosting:kill
  

  
