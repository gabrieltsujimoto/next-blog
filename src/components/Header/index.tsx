'use client';
import clsx from 'clsx';
import Link from 'next/link';

type HeaderProps = {
  headerTitle?: string;
  style?: React.CSSProperties | undefined;
};

export function Header({ headerTitle = 'The Blog' }: Readonly<HeaderProps>) {
  return (
    <header>
      <Link href='/'>
        <h1
          className={clsx([
            'text-4xl',
            'font-extrabold',
            'flex',
            'w-full',
            'items-center',
            'justify-center',
            'py-18',
            'transition-all',
            'sm:text-5xl',
            'sm:justify-start',
          ])}
        >
          {headerTitle}
        </h1>
      </Link>
    </header>
  );
}
