import clsx from 'clsx';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentProps<'div'>;

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx([
        'text-center',
        'w-screen',
        'text-slate-900',
        'bg-slate-100',
        'min-h-screen',
        'dark:bg-slate-900',
        'dark:text-slate-100',
        'transition-all',
      ])}
    >
      <div className='max-w-5xl mx-auto px-8'>{children}</div>
    </div>
  );
}
