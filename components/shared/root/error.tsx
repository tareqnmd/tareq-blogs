import { Button } from '../ui';

const Error = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<div className="flex flex-col h-full items-center justify-center gap-2">
			<h2 className="text-2xl font-bold text-danger">
				Something went wrong! {error.message}
			</h2>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
};

export default Error;
