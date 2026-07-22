'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function SwapTheme() {
  const [theme, setTheme] = useState('light');
  const baseTheme = 'flex w-full border border-red-500 rounded-2xl';

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
    <div className='fixed h-5 w-250 flex items-center bottom-4 right-4 bg-violet-400 rounded-2xl border-2 border-gray-200'>
      <div
        className={clsx(
          baseTheme,
          theme === 'dark' ? 'justify-end' : 'justify-start',
        )}
      >
        <button
          id='but'
          className='flex w-full h-full p-0 border'
          onClick={() => handleChangeTheme()}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}

export default SwapTheme;
