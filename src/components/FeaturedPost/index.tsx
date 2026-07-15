import React from 'react';
import img from '../../../public/images/bryen_0.png';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

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
            className='group-hover:scale-110 group-hover:transition-all group-hover:duration-700'
            src={img}
            alt='Imagem teste'
          />
        </div>
        <div className='gap-2 h-fit text-start'>
          <span className='text-gray-500 font-light text-sm'>
            01/01/2000 20:45
          </span>
          <h1 className={clsx('font-bold', 'text-2xl', 'sm:text-4xl')}>
            Post titulo
          </h1>
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
