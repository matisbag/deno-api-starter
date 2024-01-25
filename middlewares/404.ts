import { Context } from '../deps.ts';

const fourZeroFour = (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { message: 'Route not Found !' };
};

export default fourZeroFour;
