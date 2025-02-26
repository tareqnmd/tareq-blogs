import { QueryProvider, ThemeProvider } from '../provider';
import { Footer, Navbar } from '../shared';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<QueryProvider>
				<Navbar />
				{children}
				<Footer />
			</QueryProvider>
		</ThemeProvider>
	);
};

export default AppLayout;
