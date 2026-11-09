import { findBySlugCached } from '@/lib/post/queries';
import React from 'react';
import PostHeading from '../PostHeading';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { formatDateTime } from '@/utils/format-datetime';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugCached(slug).catch(() => undefined);
  if (!post) return notFound();
  return (
    <article>
      <header>
        <div>
          <Image
            className='overflow-hidden flex items-center justify-center rounded'
            src={post.coverImageUrl.toString()}
            width={1200}
            height={720}
            alt={post.excerpt}
          />
        </div>
        <PostHeading as={'h1'} url={`/post/${post.slug}`}>
          {post.title}
        </PostHeading>
        <p className='text-start'>
          {post.author} | {formatDateTime(post.createdAt)}
        </p>
      </header>
      <section className='inline-flex box-border border-red-800 border'>
        <div className='border'>{post.content}</div>
      </section>
    </article>
  );
}
