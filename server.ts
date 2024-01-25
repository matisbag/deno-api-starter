import { Application } from '@/deps.ts';
import router from '@/routes/index.ts';
// TODO: add 404 ?
// TODO: add error handling ?

const app = new Application();
const port = Number(Deno.env.get('PORT'));
const hostname = Deno.env.get('HOSTNAME');

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${hostname}:${port}`,
  );
});

// setup middleware
app.use(router.routes());
app.use(router.allowedMethods());

// start server
await app.listen({ port, hostname });
