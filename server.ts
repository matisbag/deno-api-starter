import { Application } from '@/deps.ts';

const app = new Application();
const port = Number(Deno.env.get('PORT'));
const hostname = Deno.env.get('HOSTNAME');

app.use((ctx) => {
  ctx.response.body = 'Hello world!';
});

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${hostname}:${port}`,
  );
});

await app.listen({ port, hostname });
