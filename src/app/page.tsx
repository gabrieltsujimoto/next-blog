'use cache';
import { FeaturedPost } from '@/components/FeaturedPost';
import { PostList } from '@/components/PostsList';
import { SpinLoading } from '@/components/SpinLoading';

import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<SpinLoading />}>
        <FeaturedPost />
        <PostList />
      </Suspense>
    </div>
  );
}
