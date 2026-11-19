import React from 'react';
import { formatHour } from '@/utils/format-datetime';
import { generateStaticParams } from '../post/[slug]/page';
generateStaticParams();
export default async function ExemploPage() {
  'use cache';
  // eslint-disable-next-line react-hooks/purity
  const hour = formatHour(Date.now());

  return (
    <main>
      <div>Hora: {hour}</div>
    </main>
  );
}
