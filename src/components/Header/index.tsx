'use client';
import clsx from 'clsx';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
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
        )}
        onClick={() => window.alert('Clicado')}
      >
        The Blog
      </h1>
    </header>
  );
}
