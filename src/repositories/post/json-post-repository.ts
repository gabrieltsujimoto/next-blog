import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { env } from 'process';
const ROOT_DIR = process.cwd(); //determina a raiz do projeto
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

env.SIMULATE_WAIT_IN_MS = '0';

const simulateWaitMs = Number(process.env.SIMULATE_WAIT_IN_MS) || 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (simulateWaitMs <= 0) return;

    await new Promise(resolve => setTimeout(resolve, simulateWaitMs));
  }
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }
}
export const postRepo: PostRepository = new JsonPostRepository();
