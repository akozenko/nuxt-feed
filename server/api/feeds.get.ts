import { getRecentPosts } from '../services/posts-service';

export default defineEventHandler(async (ev) => {
  try {
    const cookies = parseCookies(ev);
    const userId = cookies['user_id'];
    const data = getRecentPosts(userId ? +userId : -1);
    return (await data).reverse();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
