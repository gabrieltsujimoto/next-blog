'use server';

import { updateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action:', path);

  // revalidatePath(`${path}`);
  updateTag('hourcached');
  updateTag('randomuser');
}
