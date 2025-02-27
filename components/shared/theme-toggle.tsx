'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const isDark = theme === 'dark';
	const isLight = theme === 'light';

	const handleThemeToggle = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			type="button"
			aria-label="Toggle theme"
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
