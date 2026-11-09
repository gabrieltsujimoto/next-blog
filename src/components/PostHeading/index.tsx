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
    h1: ' text-2xl/tight',
    h2: ' text-lg/tight text-red-300',
  };

  const componentBaseStyle =
    'flex font-bold sm:text-4xl hover:opacity-30 hover:transition-all duration-300';

  return (
    <Tag className={clsx(headingClassMap[Tag], componentBaseStyle)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}

export default PostHeading;
