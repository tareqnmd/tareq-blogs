'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';
	const isLight = theme === 'light';

	const handleThemeToggle = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	return (
		<button
			className="theme-toggle"
			onClick={handleThemeToggle}
		>
			<MdLightMode
				className={cn('theme-toggle-icon cursor-pointer', isLight && 'hidden')}
			/>
			<MdDarkMode
				className={cn('theme-toggle-icon cursor-pointer', isDark && 'hidden')}
			/>
		</button>
	);
};

export default ThemeToggle;
