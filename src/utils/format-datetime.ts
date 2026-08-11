import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);
  return format(date, "dd/MM/yyyy' ás 'hh:mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: false,
  });
}

const rawDate = '2026-08-10T12:30:00Z';
console.log(rawDate);
console.log(formatDistanceToNow(rawDate), 'atrás');
