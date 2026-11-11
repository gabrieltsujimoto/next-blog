import ErrorMessage from '@/components/ErrorMessage';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        pageTitle='Not Found'
        contentTitle='404'
        content='Página não encontrada! Nós não conseguimos achar a página que estava
            procurando. Por favor cheque a URL ou volte à página inicial.'
      />
    </>
  );
}
