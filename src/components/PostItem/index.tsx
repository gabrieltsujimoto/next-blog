import React from 'react';
import Image from 'next/image';
import { PostModel } from '@/models/post/post-model';
import clsx from 'clsx';
import Link from 'next/link';

type PostItemProps = {
  postContent: PostModel;
  img: string;
  link: string;
};

export async function PostItem({ img, postContent, link }: PostItemProps) {
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
            objectFit='cover'
            fill
          />
        </div>

        <div className='font-light text-sm text-start sm:text-sm '>
          <p className='pb-1 text-gray-300'>
            {postContent.createdAt ? postContent.createdAt : '01/01/2000 20:45'}
          </p>
          <h1 className='font-bold sm:text-lg/tight '>
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
