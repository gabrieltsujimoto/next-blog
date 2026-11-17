import { postRepository } from '@/repositories/post';
import { drizzleDb } from '.';
import { postsTable } from './schema';

// Arquivo deve ser rodado uma vez para fazer o seed do nosso DB.
(async () => {
  try {
    const posts = await postRepository.findAll();
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log(e);
  }
})();
