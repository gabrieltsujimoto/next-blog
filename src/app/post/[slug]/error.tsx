'use client';
import React from 'react';

import ErrorMessage from '@/components/ErrorMessage';

function SlugErrorPage() {
  return (
    <ErrorMessage content='Deu ruim!' contentTitle='ERRO' pageTitle='ERRO' />
  );
}

export default SlugErrorPage;
