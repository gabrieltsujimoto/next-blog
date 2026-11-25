import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(async () => {
  'use cache';
  await postRepository.findAllPublic();
});

export const findBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);
  if (!post) notFound();
  return post;
});

export const findByIdCached = cache(async (id: string) => {
  const post = await postRepository.findById(id).catch(() => undefined);
  if (!post) notFound();
  return post;
});
