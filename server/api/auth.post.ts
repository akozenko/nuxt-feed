import { getUserByName, insertNewUser } from '../services/users-service';

const ONE_DAY = 1000 * 60 * 60 * 24;

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    if (await isValidName(name)) {
      const insertedUser = await insertNewUser(name);
      // TODO: use auth token instead
      setCookie(event, 'user_id', `${insertedUser.id}`, { maxAge: ONE_DAY });
      setCookie(event, 'user_name', `${insertedUser.name}`, { maxAge: ONE_DAY });
      return insertedUser;
    }
    throw createError({
      statusCode: 400,
      statusMessage: `"${name}" is already in use`,
      message: `"${name}" is already in use`,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});

async function isValidName(name: string) {
  const userData = await getUserByName(name);
  return !userData;
}
