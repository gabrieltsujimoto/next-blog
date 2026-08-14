'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

function SwapTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [theme]);

  function handleChangeTheme(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme == `dark` ? `light` : `dark`;
      document.documentElement.style = nextTheme.toString();

      return nextTheme;
    });
  }

  return (
    <div className='fixed h-fit top-4 right-4 bg-gray-200 w-20 p-1 flex items-center rounded-3xl z-9999'>
      <button
        className={clsx(
          'flex items-center h-fit w-full p-0.5 bg-gray-400 box-border rounded-3xl transition-transform duration-700',
          theme === 'dark' ? 'justify-end' : 'justify-start',
        )}
        onClick={e => handleChangeTheme(e)}
      >
        <div className='flex items-center justify-center h-full bg-gray-200 p-2 rounded-3xl'>
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </div>
      </button>
    </div>
  );
}

export default SwapTheme;
