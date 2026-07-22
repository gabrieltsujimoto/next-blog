import clsx from 'clsx';
import React from 'react';

type PostHeadingProps = {
  as?: 'h1' | 'h2';
  children: React.ReactNode;
  url: string;
};

function PostHeading({ as: Tag = 'h2', children }: PostHeadingProps) {
  const headingClassMap = {
    h1: ' text-2xl/tight',
    h2: ' text-lg/tight text-red-300',
  };

  const componentBaseStyle =
    'font-bold sm:text-4xl mb-4 hover:opacity-30 hover:transition-all duration-300';

  return (
    <Tag className={clsx(headingClassMap[Tag], componentBaseStyle)}>
      {children}
    </Tag>
  );
}

export default PostHeading;
