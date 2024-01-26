import { isHttpError, Next, Status } from '@/deps.ts';
import type { Context } from '@/deps.ts';

const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.body = { message: err.message };
    if (isHttpError(err)) {
      ctx.response.status = err.status;
    } else {
      ctx.response.status = Status.InternalServerError;
    }
    // possibilité de gérer l'erreur différemment selon l'environnement ou autre....
  }
};

export default errorHandler;
