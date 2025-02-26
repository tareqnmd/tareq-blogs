import { QueryProvider, ThemeProvider } from '../provider';

import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

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
