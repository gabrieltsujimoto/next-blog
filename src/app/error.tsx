'use client';
import React from 'react';

import ErrorMessage from '@/components/ErrorMessage';

function RootErrorPage() {
  return (
    <ErrorMessage content='Deu ruim!' contentTitle='ERRO' pageTitle='ERRO' />
  );
}

export default RootErrorPage;
