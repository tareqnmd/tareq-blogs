import { routeLists } from '@/lib/routes';
import Link from 'next/link';
import Logo from './logo';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
	return (
		<nav className="border-b navbar py-2 md:py-4 flex items-center justify-between gap-4">
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
