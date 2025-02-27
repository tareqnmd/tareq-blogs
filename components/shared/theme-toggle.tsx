'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';
	const isLight = theme === 'light';

	return (
		<div className="theme-toggle">
			<MdLightMode
				className={cn('theme-toggle-icon cursor-pointer', isLight && 'hidden')}
				onClick={() => setTheme('light')}
			/>
			<MdDarkMode
				className={cn('theme-toggle-icon cursor-pointer', isDark && 'hidden')}
				onClick={() => setTheme('dark')}
			/>
		</div>
	);
};

export default ThemeToggle;
