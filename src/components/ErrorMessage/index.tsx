import Link from 'next/link';
import React from 'react';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

function ErrorMessage({ pageTitle, contentTitle, content }: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div className='flex justify-center items-center'>
        <div
          className='flex flex-col items-center justify-center  text-center bg-slate-900 dark:bg-slate-100
         text-slate-200 px-4 py-8 rounded-xl'
        >
          <h1 className='text-4xl md:text-6xl font-bold dark:text-slate-900 mb-4 font-mono'>
            {contentTitle}
          </h1>
          <div className='text-lg md:text-xl text-gray-500 mb-8 '>
            {content}
          </div>
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

export default ErrorMessage;
