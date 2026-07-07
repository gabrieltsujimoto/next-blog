import { postRepository } from '@/repositories/post';

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map(post => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
}
