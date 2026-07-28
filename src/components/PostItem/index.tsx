import React from 'react';
import Image from 'next/image';
import { PostModel } from '@/models/post/post-model';
import clsx from 'clsx';
import Link from 'next/link';
import { format } from 'date-fns';

type PostItemProps = {
  postContent: PostModel;
  img: string;
  link: string;
};

export async function PostItem({ img, postContent, link }: PostItemProps) {
  const date = format(postContent.createdAt, 'dd/MM/yyyy hh:mm:ss');

  return (
    <Link href={link}>
      <div className='w-full h-full py-4 grid-rows-2'>
        <div
          className={clsx(
            'my-5',
            'rounded-xl',
            'overflow-hidden',
            'h-40',
            'w-full',
            'relative',
            'group',
          )}
        >
          <Image
            className='group-hover:scale-110 object-center object-cover group-hover:transition-all group-hover:duration-700'
            src={img}
            alt='Imagem teste'
            sizes='max-width(100%)'
            fill
          />
        </div>

        <div className='font-light text-sm text-start sm:text-sm'>
          <time className='pb-1 text-gray-500'>
            {postContent.createdAt ? date : '01/01/2000 20:45'}
          </time>
          <h1 className='font-bold mb-2 sm:text-lg/tight '>
            {postContent.title ? postContent.title : 'Post titulo'}
          </h1>
          <p className='text-start'>
            {postContent.excerpt ? postContent.excerpt : 'Post titulo'}
          </p>
        </div>
      </div>
    </Link>
  );
}
