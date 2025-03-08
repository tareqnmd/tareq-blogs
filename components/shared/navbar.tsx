import { routeLists } from '@/utils/routes';
import Link from 'next/link';
import { Logo, ThemeToggle } from './';

const Navbar = () => {
	return (
		<nav className="border-b border-b-primary/40 navbar py-2 md:py-4 xl:py-6 flex items-center justify-between gap-4">
			<Logo />
			<div className="navbar-links flex items-center gap-4">
				{Object.values(routeLists).map((route) => (
					<Link
						key={route.route}
						href={route.route}
					>
						{route.name}
					</Link>
				))}
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
