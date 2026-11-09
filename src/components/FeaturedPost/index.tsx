import React from 'react';
import img from '../../../public/images/bryen_0.png';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import PostHeading from '../PostHeading';
import { findAllPublicPostsCached } from '@/lib/post/queries';
import { formatDateTime } from '@/utils/format-datetime';

export async function FeaturedPost() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <div className='group'>
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'mb-8',
          'sm:grid',
          'sm:grid-cols-2',
          'sm:h-full',
          'sm:gap-8',
          'sm:mb-8',
        )}
      >
        <div
          className={clsx(
            'h-full',
            'w-full',
            'sm:w-full',
            'sm:h-full',
            'rounded-xl',
            'overflow-hidden',
          )}
        >
          <Link href={postLink}>
            <Image
              className='h-full group-hover:scale-110 object-center object-cover group-hover:transition-all group-hover:duration-700'
              src={img}
              alt={post.excerpt}
              priority
            />
          </Link>
        </div>
        <div className='gap-2 h-fit sm:h-full flex flex-col justify-center w-full p-2'>
          <PostHeading url={postLink} as='h1'>
            <h1>{post.title}</h1>
          </PostHeading>
          <div>
            <time
              className='text-slate-600 font-light text-sm w-full text-start'
              dateTime={post.createdAt}
            >
              {formatDateTime(post.createdAt)}
            </time>
            <p className='my-2'>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
