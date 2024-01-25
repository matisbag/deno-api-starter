import { Context } from '../deps.ts';

const fourZeroFourMiddleware = (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { message: 'Route not Found !' };
};

export default fourZeroFourMiddleware;
