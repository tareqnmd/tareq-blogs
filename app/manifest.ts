import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Tareq Blogs',
		short_name: 'Tareq Blogs',
		description: 'Tareq Blogs by Tareqnmd',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: 'images/site/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: 'images/site/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: 'images/site/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: 'images/site/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: 'images/site/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: 'images/site/favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon',
			},
		],
	};
}
