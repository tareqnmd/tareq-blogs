'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';

	const handleThemeToggle = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			className="theme-toggle"
			onClick={handleThemeToggle}
		>
			<MdLightMode
				suppressHydrationWarning
				className={cn('theme-toggle-icon cursor-pointer', !isDark && 'hidden')}
			/>
			<MdDarkMode
				suppressHydrationWarning
				className={cn('theme-toggle-icon cursor-pointer', isDark && 'hidden')}
			/>
		</button>
	);
};

export default ThemeToggle;
