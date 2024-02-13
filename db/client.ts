import { Client } from '@/deps.ts';

const client = await new Client();

client.connect({
  hostname: Deno.env.get('DB_HOST'),
  username: Deno.env.get('DB_USER'),
  db: Deno.env.get('DB_NAME'),
  password: Deno.env.get('DB_PASSWORD'),
});

export default client;
