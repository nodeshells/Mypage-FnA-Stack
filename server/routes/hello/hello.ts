import * as http from 'http';
import { Router } from 'express';

const helloRouter: Router = Router();

helloRouter.get('/', (req: any, res, next) => {
  console.log('hello!');
  res.send('hello!');
});

export { helloRouter };
