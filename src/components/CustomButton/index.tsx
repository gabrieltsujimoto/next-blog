'use client';

import { useEffect, useState } from 'react';

type CustomButtonProps = {
  text: string;
};

export function CustomButton({ text }: CustomButtonProps) {
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
    <button
      id='but'
      className='bg-violet-400 dark:bg-blue-300'
      onClick={() => handleChangeTheme()}
    >
      {text}
    </button>
  );
}
