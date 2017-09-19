import Koa from 'koa';
import routes from './routes';
import { dbconnect } from './models/db';
import setupModels from './models/setupModels';

async function setup() {
  await dbconnect();
  await setupModels();
  const app = new Koa();
  app.use(routes)
  await app.listen(3000);
}

setup().then(() => {
  console.log('Server started on port 3000') // eslint-disable-line
});
