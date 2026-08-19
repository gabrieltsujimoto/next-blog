import { findBySlugCached } from '@/lib/post/queries';
import React from 'react';
import PostHeading from '../PostHeading';
import { notFound } from 'next/navigation';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugCached(slug).catch(() => undefined);
  if (!post) return notFound();
  return (
    <div>
      <PostHeading as={'h1'} url='/'>
        {post.title}
      </PostHeading>
      <div>{post.content}</div>
    </div>
  );
}
