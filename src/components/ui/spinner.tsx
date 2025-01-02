import { cn } from '@/utils/helpers';

export default function Spinner(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="size-8 animate-spin rounded-full border-y-2 border-primary"></div>
    </div>
  );
}
