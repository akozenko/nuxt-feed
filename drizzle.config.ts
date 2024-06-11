import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  dialect: 'sqlite',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: 'file:./feeds.db',
  },
} satisfies Config;

