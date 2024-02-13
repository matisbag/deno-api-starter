import { Application } from '@/deps.ts';
import router from '@/routes/index.ts';
import '@/db/client.ts';
import fourZeroFourMiddleware from '@/middlewares/404Middleware.ts';
import errorHandlerMiddleware from '@/middlewares/errorHandlerMiddleware.ts';

const app = new Application();
const port = Number(Deno.env.get('PORT'));
const hostname = Deno.env.get('HOSTNAME');

// setup middleware
app.use(errorHandlerMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(fourZeroFourMiddleware);

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${hostname}:${port}`,
  );
});

// start server
await app.listen({ port, hostname });
