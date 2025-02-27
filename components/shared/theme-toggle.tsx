'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="theme-toggle">
			<MdLightMode
				className={cn(
					'theme-toggle-icon cursor-pointer',
					theme === 'light' && 'hidden'
				)}
				onClick={() => setTheme('light')}
			/>
			<MdDarkMode
				className={cn(
					'theme-toggle-icon cursor-pointer',
					theme === 'dark' && 'hidden'
				)}
				onClick={() => setTheme('dark')}
			/>
		</div>
	);
};

export default ThemeToggle;
