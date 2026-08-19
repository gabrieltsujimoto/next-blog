import { clsx } from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className={clsx(['text-sm', 'font-bold', 'text-center', 'py-8'])}>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
