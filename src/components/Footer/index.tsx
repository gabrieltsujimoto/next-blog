import { clsx } from 'clsx';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className={clsx(['text-xl', 'font-bold', 'text-center', 'py-8'])}>
        Desenvolvido por Gabriel.
      </p>
    </footer>
  );
}
