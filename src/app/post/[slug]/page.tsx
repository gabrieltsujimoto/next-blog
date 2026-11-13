import SinglePost from '@/components/SinglePost';
import { SpinLoading } from '@/components/SpinLoading';
import { findAllPublicPostsCached, findBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await findAllPublicPostsCached();

  return posts.map(post => {
    return { slug: post.slug };
  });
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const slug = (await params).slug;

  if (!slug) {
    throw new Error('Erro na slug');
  }
  return (
    <Suspense fallback={<SpinLoading />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
