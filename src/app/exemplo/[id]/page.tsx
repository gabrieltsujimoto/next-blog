import React from 'react';
import { revalidateExampleAction } from '@/app/actions/revalidateExample';
import { getFormattedDate } from '@/components/FormattedDate';
// export const dynamicParams = true;
// export const dynamic = 'force-static';
// export const revalidate = 30; //intervalo de revalidação do cache - principio ISR

// export async function generateStaticParams() {
//   //geração estática, inicialmente só vai gerar id 1 e 2
//   return [{ id: '1' }, { id: '2' }];
// }

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const hour = await getFormattedDate();

  const response = await fetch('https://randomuser.me/api/?results=1', {
    next: {
      tags: ['randomuser'],
    },
  });

  const json = await response.json();
  const firstName = json.results[0].name.first;

  return (
    <main>
      <p>Nome recebido na requisição do fetch: {firstName}</p>
      <div>
        Hora: {hour} ID:{id}
      </div>
      <form
        className='border border-white rounded p-2 w-fit text-center'
        action={revalidateExampleAction}
      >
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />
        <button
          className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer'
          type='submit'
        >
          Revalidate
        </button>
      </form>
    </main>
  );
}
