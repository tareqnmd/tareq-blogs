import { QueryProvider, ThemeProvider } from '../provider';
import { Footer, Navbar } from '../sharedg';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="main-app container grid min-h-screen grid-rows-[auto_1fr_auto] gap-2 md:gap-4 xl:gap-6">
			<ThemeProvider>
				<QueryProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</QueryProvider>
			</ThemeProvider>
		</div>
	);
};

export default AppLayout;
