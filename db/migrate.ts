const migrationsPath = 'db/migrations';

for await (const dirEntry of Deno.readDir(migrationsPath)) {
  if (!dirEntry.isFile) continue;
  const migrationPath = `${migrationsPath}/${dirEntry.name}`;

  console.log(`Running migration: ${dirEntry.name}`);

  // deno-lint-ignore no-deprecated-deno-api
  const process = Deno.run({
    cmd: ['deno', 'run', '-A', migrationPath],
  });

  await process.status();
}

console.log('Migrations complete');
