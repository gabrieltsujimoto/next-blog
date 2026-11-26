import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin();

  return (
    <div>
      <div>
        {posts.map((post, index) => {
          return (
            <p
              key={index}
              className='border py-2 my-1 rounded border-amber-300'
            >
              {post.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
