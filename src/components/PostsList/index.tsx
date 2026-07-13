import { postRepository } from '@/repositories/post';
import { PostItem } from '../PostItem';
import clsx from 'clsx';

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div
      className={clsx(
        'w-full',
        'flex',
        'flex-col',
        'justify-center',
        'sm:grid',
        'sm:grid-cols-2',
        'sm:gap-6',
        'md:grid-cols-3',
      )}
    >
      {posts.map(post => {
        return (
          <PostItem key={post.id} img={post.coverImageUrl} postContent={post} />
        );
      })}
    </div>
  );
}
