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
    <div className='fixed h-fit top-4 right-8 bg-gray-100 w-20 p-0.5 flex items-center rounded-3xl'>
      <button
        className={clsx(
          'flex items-center w-full p-0.5 bg-gray-400 box-border rounded-3xl transition-all duration-700 ',
        )}
        onClick={e => handleChangeTheme(e)}
      >
        <div
          className={clsx(
            'flex',
            'items-center',
            'justify-center',
            'h-8',
            'bg-gray-200',
            'p-2',
            'rounded-3xl',
            'transition-all',
            'duration-500',
            theme === 'dark' ? 'ml-[0%]' : 'ml-[55%]',
          )}
        >
          {theme === 'dark' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
        </div>
      </button>
    </div>
  );
}

export default SwapTheme;
