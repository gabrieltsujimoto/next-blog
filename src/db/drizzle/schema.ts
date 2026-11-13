import { InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Definindo a estrutura da table
export const postsTable = sqliteTable('posts_table', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull().unique(),
  content: text('content').notNull(),
  coverImageUrl: text('coverImageUrl').notNull().unique(),
  published: integer('published', { mode: 'boolean' }).notNull(),
  createdAt: text('createdAt').notNull(),
  updatedAt: text('updatedAt').notNull(),
  author: text('author').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostsTableInsertMode = InferSelectModel<typeof postsTable>;
