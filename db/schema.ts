import type { InferInsertModel,InferSelectModel } from 'drizzle-orm';
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('user', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
});

export const posts = sqliteTable('post', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userName: text('user_name').notNull().references(() => users.name),
  likesCount: integer('likes_count').notNull().default(0),
  content: text('content').notNull(),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const likes = sqliteTable('likes', {
  postId: integer('post_id').references(() => posts.id),
  userId: integer('user_id').references(() => users.id),
});

export type Post = InferSelectModel<typeof posts>;
export type InsertPost = InferInsertModel<typeof posts>;

export type User = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;

export type InsertLike = InferInsertModel<typeof likes>;

