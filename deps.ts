/**
 * deps.ts
 *
 * This module re-exports the required methods.
 */

// Oak
export { Application, Router } from 'https://deno.land/x/oak@v12.6.2/mod.ts';
export type { RouterContext } from 'https://deno.land/x/oak@v12.6.2/mod.ts';

export { createRequire } from 'node:module';

// Load environment variables
import 'std/dotenv/load.ts';
