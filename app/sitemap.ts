import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://blogs.tareqnmd.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://blogs.tareqnmd.com/blogs',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	];
}
