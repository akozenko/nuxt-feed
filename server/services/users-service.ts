import { eq } from 'drizzle-orm';

import { users } from '../../db/schema';
import { db } from './sqlite-service';

export async function insertNewUser(name: string) {
  const [ insertedUser ] = await db.insert(users).values({name}).returning();
  return insertedUser;
}

export async function getUserByName(name: string) {
  return await db.select().from(users).where(eq(users.name, name)).get();
}
