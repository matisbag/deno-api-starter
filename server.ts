import { Application } from '@/deps.ts';
import prisma from '@/prisma.ts';

const app = new Application();
const port = Number(Deno.env.get('PORT'));
const hostname = Deno.env.get('HOSTNAME');

app.use(async (ctx) => {
  const dinosaurs = await prisma.dinosaur.findMany();
  ctx.response.body = dinosaurs;
});

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${hostname}:${port}`,
  );
});

await app.listen({ port, hostname });
