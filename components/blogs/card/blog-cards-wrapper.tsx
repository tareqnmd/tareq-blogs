import { cn } from '@/lib/cn';

const BlogCardsWrapper = ({
	children,
	extraClass,
}: {
	children: React.ReactNode;
	extraClass?: string;
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6',
				extraClass
			)}
		>
			{children}
		</div>
	);
};

export default BlogCardsWrapper;
