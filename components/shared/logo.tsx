import { Routes } from '@/lib/routes';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			className="logo"
			href={Routes.Home}
		>
			<h1 className="text-2xl font-bold">Tareq Blogs</h1>
		</Link>
	);
};

export default Logo;
