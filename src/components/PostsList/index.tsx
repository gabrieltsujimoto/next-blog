import { PostItem } from '../PostItem';
import clsx from 'clsx';
import { findAllPublicPostsCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';

export async function PostList() {
  const posts = await findAllPublicPostsCached();

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
      {posts.map((post: PostModel) => {
        return (
          <PostItem
            link={post.slug}
            key={post.id}
            img={post.coverImageUrl}
            postContent={post}
          />
        );
      })}
    </div>
  );
}
