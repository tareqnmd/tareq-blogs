import { ThemeProvider } from 'next-themes';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
};

export default AppLayout;
