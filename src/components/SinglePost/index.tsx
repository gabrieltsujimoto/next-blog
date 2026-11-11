import { findBySlugCached } from '@/lib/post/queries';
import React from 'react';
import PostHeading from '../PostHeading';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { formatDateTime } from '@/utils/format-datetime';
import { clsx } from 'clsx';
import { SafeMarkdown } from '../SafeMarkdown';

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
        <div className={clsx(['my-2'])}>
          <PostHeading as={'h1'} url={`/post/${post.slug}`}>
            {post.title}
          </PostHeading>
          <p className='text-start font-thin text-sm opacity-70'>
            {post.author} | {formatDateTime(post.createdAt)}
          </p>
        </div>
      </header>
      <section className='w-full my-2 text-justify mb-16'>
        <SafeMarkdown markdown={post.content} />
      </section>
    </article>
  );
}
