import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  as?: 'h1' | 'h2';
  children: React.ReactNode;
  url: string;
} & React.CSSProperties;

function PostHeading({ as: Tag = 'h2', children, url }: PostHeadingProps) {
  const headingClassMap = {
    h1: 'text-2xl sm:text-2xl md:text-4xl',
    h2: 'text-lg/tight text-red-300',
  };

  const componentBaseStyle =
    'text-start mt-2 mb-1 font-bold sm:mt-4 sm:mb-2 hover:opacity-30 hover:transition-all duration-300';

  return (
    <Tag className={clsx(headingClassMap[Tag], componentBaseStyle)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}

export default PostHeading;
