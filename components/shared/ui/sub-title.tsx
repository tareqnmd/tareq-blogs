import { cn } from '@/lib';

const SubTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <h3 className={cn('text-lg font-medium', className)}>{children}</h3>;
};

export default SubTitle;
