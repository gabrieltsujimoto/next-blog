import notFound from '@/app/not-found';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPostByIdAdmin = cache(async (id: string) => {
  const post = await postRepository.findById(id).catch(() => undefined);
  if (!post) notFound();
  return post;
});

export const findAllPostsAdmin = cache(async () => {
  return postRepository.findAll();
});
