import React from 'react';
import Image from 'next/image';
import { PostModel } from '@/models/post/post-model';

type PostItemProps = {
  postContent: PostModel;
  img: string;
};

export async function PostItem({ img, postContent }: PostItemProps) {
  return (
    <div className='w-full py-4'>
      <div className='my-5 rounded overflow-hidden h-50 relative sm:grid-cols-2'>
        <Image src={img} alt='Imagem teste' fill />
      </div>

      <div className='font-light text-xs text-start sm:text-sm'>
        <p className='pb-1 text-gray-300'>
          {postContent.createdAt ? postContent.createdAt : '01/01/2000 20:45'}
        </p>
        <h1 className='font-bold sm:text-lg/tight border '>
          {postContent.title ? <p>{postContent.title}</p> : 'Post titulo'}
        </h1>
        <p className='text-start'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ut
          nisi?
        </p>
      </div>
    </div>
  );
}
