import React from 'react';
import img from '../../../public/images/bryen_0.png';
import Image from 'next/image';
import clsx from 'clsx';

export function FeaturedPost() {
  return (
    <div className={clsx('sm:flex', 'sm:h-full', 'sm:gap-4', 'items-center')}>
      <div className={clsx('w-full', 'h-full', 'rounded', 'overflow-hidden')}>
        <Image src={img} alt='Imagem teste' />
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
          nisi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          ut nisi? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Minus, ut nisi?
        </p>
      </div>
    </div>
  );
}
