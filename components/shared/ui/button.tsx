import { cn } from '@/lib';

const Button = ({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) => {
	return (
		<button
			className={cn('btn btn-primary', className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
