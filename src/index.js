import Koa from 'koa';

import routes from './routes';

const app = new Koa();

app.use(routes)

app.listen(3000, () => {
  console.log('Server started on port 3000') // eslint-disable-line
});
