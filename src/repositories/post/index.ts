import { DrizzlePostRepository } from '@/db/drizzle/drizzle-post-repository';
import { PostRepository } from './post-repository';

//* import { JsonPostRepository } from './json-post-repository';
// ? Deve ser alterado quando for seedar para o JsonPostRepository

export const postRepository: PostRepository = new DrizzlePostRepository();
