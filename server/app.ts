import * as app from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { routeIndex } from './routes';
import { MONGO_URL } from './config';

class App {
  public app: app.Application;

  constructor() {
    this.app = app();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // 接続する MongoDB の設定
    // mongoose.Promise = global.Promise;
    // mongoose.connect(process.env.MONGO_URL || MONGO_URL, {
    //   useMongoClient: true,
    // });
    // process.on('SIGINT', function() { mongoose.disconnect(); });
  }

  private routes(): void {
    // 静的資産へのルーティング
    // corsを許可(開発時のみ)
    this.app.use((req, res, next) => {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      // Pass to next layer of middleware
      next();
    });

    this.app.use('/api/hello', routeIndex.hello);

    // 静的資産へのルーティング
    this.app.use(app.static(path.join(__dirname, 'public')));


    // その他のリクエストはindexファイルにルーティング
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/index.html'));
    });
  }
}

export default new App().app;
