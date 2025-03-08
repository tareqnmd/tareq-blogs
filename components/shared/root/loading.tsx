import { BiLoader } from 'react-icons/bi';

const Loading = () => {
	return (
		<div className="flex h-full items-center justify-center">
			<BiLoader className="animate-spin text-2xl" />
		</div>
	);
};

export default Loading;
