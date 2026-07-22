import React from 'react';
import img from '../../../public/images/bryen_0.png';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import PostHeading from '../PostHeading';

export function FeaturedPost() {
  return (
    <Link className='group' href={''}>
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
          <Image
            className='h-full group-hover:scale-110 object-center object-cover group-hover:transition-all group-hover:duration-700'
            src={img}
            alt='Imagem teste'
            priority
          />
        </div>
        <div className='gap-2 h-fit sm:h-full text-start flex flex-col justify-center'>
          <time
            dateTime='2000-01-01'
            className='text-slate-600 font-light text-smr'
          >
            01/01/2000 20:45
          </time>
          <PostHeading as='h1' url='#'>
            Titulo do featured post
          </PostHeading>
          <p className='font-normal text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ut
            nisi? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus, ut nisi? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Minus, ut nisi?
          </p>
        </div>
      </div>
    </Link>
  );
}
