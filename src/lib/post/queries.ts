import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findBySlugCached = cache(
  async (slug: string) => await postRepository.findBySlugPublic(slug),
);
