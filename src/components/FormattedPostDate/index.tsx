'use client';
import { formatDateTime } from '@/utils/format-datetime';
import React from 'react';

interface FormattedPostDateProps {
  date: string;
}

function FormattedPostDate({ date }: FormattedPostDateProps) {
  return (
    <time title={formatDateTime(date)}>
      {date ? formatDateTime(date) : 'Erro ao carregar dados'}
    </time>
  );
}

export default FormattedPostDate;
