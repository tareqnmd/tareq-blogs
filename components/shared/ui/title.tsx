import { cn } from '@/lib';

const Title = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <h2 className={cn('text-2xl font-bold', className)}>{children}</h2>;
};

export default Title;
