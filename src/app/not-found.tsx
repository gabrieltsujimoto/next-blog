import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <title>Not Found</title>
      <div className='flex justify-center items-center '>
        <div
          className='flex flex-col h-fit items-center justify-center  text-center bg-slate-900 dark:bg-slate-100
         text-slate-200 p-4 rounded-xl'
        >
          <h1 className='text-6xl font-bold dark:text-slate-900 mb-4 font-mono'>
            404
          </h1>
          <p className='text-xl text-gray-500 mb-8 '>
            Página não encontrada! Nós não conseguimos achar a página que estava
            procurando. Por favor cheque a URL ou volte à página inicial.
          </p>
          <Link
            href={'/'}
            className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700'
          >
            Voltar a home
          </Link>
        </div>
      </div>
    </>
  );
}
