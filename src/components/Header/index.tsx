'use client';
import clsx from 'clsx';

export function Header() {
  console.log('Header client renderizado');

  return (
    <h1
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'text-3xl',
        'font-bold',
        'text-gray-900',
      )}
      onClick={() => window.alert('Clicado')}
    >
      Texto do H1
    </h1>
  );
}
