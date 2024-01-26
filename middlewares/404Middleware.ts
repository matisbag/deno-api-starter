import { Context, Status } from '@/deps.ts';

const fourZeroFourMiddleware = (ctx: Context) => {
  ctx.throw(Status.NotFound, 'Route not Found !');
};

export default fourZeroFourMiddleware;
