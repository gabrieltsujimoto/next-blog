import { PostModel } from '@/models/post/post-model';
import { PostRepository } from '@/repositories/post/post-repository';
import { drizzleDb } from '.';
export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.postsTable.findMany({
      orderBy: { createdAt: 'desc' },
      where: { published: { eq: true } },
    });

    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    const query = await drizzleDb.query.postsTable.findMany({});
    console.log(query);
    return query;
  }
  async findById(searchId: string): Promise<PostModel> {
    const post = await drizzleDb.query.postsTable.findFirst({
      where: { id: { eq: searchId } },
    });

    if (!post) {
      throw new Error('ID não encontrado!');
    }

    return post;
  }
  async findBySlugPublic(searchSlug: string): Promise<PostModel> {
    const post = await drizzleDb.query.postsTable.findFirst({
      where: { slug: searchSlug, published: true },
    });
    if (!post) throw new Error('Post com slug informado não encontrado!');
    return post;
  }
}

export const drizzlePostRepository: PostRepository =
  new DrizzlePostRepository();
