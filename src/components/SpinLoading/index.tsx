import clsx from 'clsx';

type SpinLoadingProps = {
  containerClasses?: string;
};

export function SpinLoading({ containerClasses }: SpinLoadingProps) {
  const classes = clsx(
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    containerClasses!,
  );

  return (
    <div className={classes}>
      <div
        className={clsx(
          'w-10 h-10 border-5 border-green-300 border-t-transparent rounded-full animate-spin',
        )}
      ></div>
    </div>
  );
}
