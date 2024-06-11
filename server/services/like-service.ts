import { likes } from '../../db/schema';
import { getPostById, savePost } from './posts-service';
import { db } from './sqlite-service';

export async function like(postId: number, userId: number) {
  // TODO: transaction

  const post = await getPostById(postId);
  if (!post) {
    return;
  }

  post.likesCount += 1;
  await savePost(post);

  await db.insert(likes).values({ postId, userId }).run();

  return post;
}
