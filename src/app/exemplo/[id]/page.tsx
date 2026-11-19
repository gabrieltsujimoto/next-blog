import React from 'react';
import { formatHour } from '@/utils/format-datetime';
import { revalidateExampleAction } from '@/app/actions/revalidateExample';

export const dynamic = 'force-static';
// export const dynamicParams = true;
export const revalidate = 30; //intervalo de revalidação do cache - principio ISR

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
  // eslint-disable-next-line react-hooks/purity
  const hour = formatHour(Date.now());

  return (
    <main>
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
