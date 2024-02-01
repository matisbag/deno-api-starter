import { Bugsnag } from '@/deps.ts';

export const BugsnagClient = Bugsnag.default.start({
  apiKey: Deno.env.get('BUGSNAG_API_KEY') as string,
  appType: 'Deno',
  releaseStage: Deno.env.get('DENO_ENV'),
  enabledReleaseStages: ['production'],
});
