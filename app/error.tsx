'use client';
import { Error as AppError } from '@/components/shared';

const Error = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<AppError
			error={error}
			reset={reset}
		/>
	);
};

export default Error;
