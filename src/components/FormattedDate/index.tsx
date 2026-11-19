import React from 'react';

import { cacheTag } from 'next/cache';
import { formatHourCached } from '@/utils/format-datetime';

type FormattedDateProps = {
  type: string | 'hh:ss' | 'dd:mm:aaaa' | 'aaaa';
};

export async function getFormattedDate() {
  'use client';
  'use cache';

  cacheTag('hourcached');
  const hour = await formatHourCached();
  return FormattedDate({ type: hour });
}

function FormattedDate({ type }: FormattedDateProps) {
  return <div>{type}</div>;
}

export default FormattedDate;
