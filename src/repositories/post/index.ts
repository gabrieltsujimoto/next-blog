import { DrizzlePostRepository } from '@/db/drizzle/drizzle-post-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new DrizzlePostRepository();
