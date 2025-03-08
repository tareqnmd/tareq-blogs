import { AppLayout } from '@/components/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';

const geistSans = PT_Sans({
	variable: '--font-pt-sans',
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: 'Tareq Blogs',
	description: 'Tareq Blogs',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
		>
			<body
				suppressHydrationWarning
				className={`${geistSans.variable} antialiased`}
			>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
