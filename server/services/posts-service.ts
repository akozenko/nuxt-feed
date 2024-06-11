import { desc, eq, and } from 'drizzle-orm';

import { posts, likes } from "../../db/schema";
import { db } from "./sqlite-service";
import type { Post, InsertPost } from "../../db/schema";

export function getRecentPosts(userId: number, limit = 10) {
  return db.select({
    id: posts.id,
    userName: posts.userName,
    likesCount: posts.likesCount,
    content: posts.content,
    createdAt: posts.createdAt,
    isLikesByMe: likes?.userId,
  }).from(posts).leftJoin(likes, and(eq(posts.id, likes.postId), eq(likes.userId, userId))).orderBy(desc(posts.createdAt)).limit(limit);
}

export function getPostById(id: number) {
  return db.select().from(posts).where(eq(posts.id, id)).get();;
}

export async function savePost(post: Post) {
  const [ updatedPost ] = await db.update(posts)
  .set(post)
  .where(eq(posts.id, post.id))
  .returning();

  return updatedPost;
}

export async function insertNewPost(content: string, userName: string) {
  const newPost: InsertPost = {
    content,
    userName,
    createdAt: new Date().toISOString(),
    likesCount: 0,
  }

  const [ insertedPost ] = await db.insert(posts).values(newPost).returning();
  return insertedPost;
}
