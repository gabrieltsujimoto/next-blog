import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = unstable_cache(
  async () => {
    const cachedPosts = await postRepository
      .findAllPublic()
      .catch(() => undefined);
    console.log('cachedPosts na query: ', cachedPosts);
    return cachedPosts;
  },
  ['posts'],
  {
    tags: ['posts'],
  },
);

export const findBySlugPublicCached = async (slug: string) => {
  return unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);
      if (!post) notFound();

      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    },
  )(slug);
};
