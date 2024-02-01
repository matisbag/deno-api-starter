import { isHttpError, Next, Status } from '@/deps.ts';
import type { Context } from '@/deps.ts';
import { BugsnagClient } from '@/utils/bugsnag.ts';

const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      ctx.response.body = { message: err.message };
      ctx.response.status = err.status;
    } else {
      BugsnagClient.notify(err);
      ctx.response.body = { message: 'Erreur interne du serveur' };
      ctx.response.status = Status.InternalServerError;

      if (Deno.env.get('DENO_ENV') === 'development') console.error(err);
    }
    // possibilité de gérer l'erreur différemment selon l'environnement ou autre....
  }
};

export default errorHandler;
