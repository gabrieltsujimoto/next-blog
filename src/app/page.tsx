import { Container } from '@/components/Container';
import { CustomButton } from '@/components/CustomButton';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostsList';
import { SpinLoading } from '@/components/SpinLoading';
import Link from 'next/link';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoading />}>
        <Link href={'#'} className='mb-5'>
          <FeaturedPost />
        </Link>
        <PostList />
      </Suspense>

      <CustomButton text='Change Theme' />
      <footer>
        <span>Desenvolvido por Gabriel.</span>
      </footer>
    </Container>
  );
}
