'use client';

import { useEffect, useState } from 'react';

export function CustomButton() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', theme);
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
      className='bg-amber-800 dark:bg-amber-200'
      onClick={e => handleChangeTheme(e)}
    >
      Change theme
    </button>
  );
}
