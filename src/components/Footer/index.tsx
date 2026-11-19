import { clsx } from 'clsx';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { SpinLoading } from '../SpinLoading';

async function getCurrentYear() {
  'use cache';
  return new Date().getFullYear();
}

export default async function Footer() {
  return (
    <Suspense fallback={<SpinLoading />}>
      <footer>
        <p
          className={clsx([
            'text-sm',
            'font-bold',
            'text-center',
            'py-8',
            'bottom-0',
          ])}
        >
          <span>Copyright &copy; {await getCurrentYear()}- </span>
          <Link href='/'>The Blog</Link>
        </p>
      </footer>
    </Suspense>
  );
}
