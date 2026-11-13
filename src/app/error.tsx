'use client';

import React, { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    return () => {
      console.log(error);
    };
  }, [error]);

  return (
    <ErrorMessage
      content={
        <button onClick={() => reset()}>Clique para tentar novamente!</button>
      }
      contentTitle='ERRO'
      pageTitle='ERRO'
    />
  );
}

export default RootErrorPage;
