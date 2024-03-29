/**
 * deps.ts
 *
 * This module re-exports the required methods.
 */

// Oak
export {
  Application,
  isHttpError,
  Router,
  Status,
} from 'https://deno.land/x/oak@v13.2.5/mod.ts';
export type {
  Context,
  Next,
  RouterContext,
} from 'https://deno.land/x/oak@v13.2.5/mod.ts';

export { Client } from 'https://deno.land/x/mysql@v2.12.1/mod.ts';

export { default as Bugsnag } from 'npm:@bugsnag/js@7.22.3';

// Load environment variables
import 'std/dotenv/load.ts';
