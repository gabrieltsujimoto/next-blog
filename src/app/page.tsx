import { CustomButton } from '@/components/CustomButton';
import { PostList } from '@/components/PostsList';
import { SpinLoading } from '@/components/SpinLoading';
import clsx from 'clsx';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <div
      className={clsx(
        'text-center',
        'border-red-500',
        'w-full',
        'text-slate-900',
        'bg-slate-100',
        'min-h-screen',
        'dark:bg-amber-200',
      )}
    >
      <header className={clsx('font-bold')}>
        <h1>The blog</h1>
      </header>
      <Suspense fallback={<SpinLoading />}>
        <PostList />
      </Suspense>

      <CustomButton />
      <footer>
        <span>Desenvolvido por Gabriel.</span>
      </footer>
    </div>
  );
}
