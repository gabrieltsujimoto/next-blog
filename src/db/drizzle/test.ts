import { drizzlePostRepository } from './drizzle-post-repository';

(async () => {
  const postsFromDb = await drizzlePostRepository.findAll();
  const postIdBased = await drizzlePostRepository.findById(
    'bc9a540f-66a9-4ab0-8d50-6216ab1cac53',
  );
  const postSlugBased = await drizzlePostRepository.findBySlugPublic(
    '10-habitos-para-aumentar-sua-produtividade',
  );

  postsFromDb.map(post => {
    console.log(`----------------------------`);
    console.log(`Criado em: ${post.id}`);
    console.log(`Criado em: ${post.createdAt}`);
    console.log(`Slug: ${post.slug}`);
    console.log(`isPublished? ${post.published}`);
    console.log(`----------------------------\n`);
  });
  console.log(postIdBased);

  console.log(`
      ----- SEARCH SLUG PUBLISHED ----
        ${JSON.stringify(postSlugBased)}
    `);
})();
