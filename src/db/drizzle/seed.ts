import { postRepository } from '@/repositories/post';
import { drizzleDb } from '.';
import { postsTable } from './schema';

(async () => {
  const posts = await postRepository.findAll();
  await drizzleDb.delete(postsTable); //! reset de database mas pros testes

  try {
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log(e);
  }
  const postsDb = await drizzleDb.select().from(postsTable);
  console.log(postsDb);
})();
