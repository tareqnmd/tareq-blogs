'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextThemesProvider
			defaultTheme="system"
			enableSystem
		>
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
