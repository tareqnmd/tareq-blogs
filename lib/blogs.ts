const categories = [
	{
		name: 'Accessibility',
		slug: 'accessibility',
	},
	{
		name: 'Web Development',
		slug: 'web-development',
	},
	{
		name: 'React',
		slug: 'react',
	},
	{
		name: 'Next.js',
		slug: 'nextjs',
	},
	{
		name: 'TypeScript',
		slug: 'typescript',
	},
	{
		name: 'JavaScript',
		slug: 'javascript',
	},
	{
		name: 'HTML',
		slug: 'html',
	},
	{
		name: 'CSS',
		slug: 'css',
	},
];

export const blogs = [
	{
		title: 'Building Scalable React Applications with Next.js 14',
		shortContent:
			'Explore the latest features in Next.js 14 and learn how to architect large-scale applications with best practices for performance and maintainability.',
		date: '2024-03-15',
		category: 'Development',
		tags: ['React', 'Next.js', 'Performance', 'Architecture'],
		image: '/images/blog.jpg',
		slug: 'building-scalable-react-applications',
		author: 'Sarah Chen',
		readingTime: 8,
		views: 1000,
	},
	{
		title: 'The Rise of AI in Software Development',
		shortContent:
			'How AI-powered tools like GitHub Copilot and ChatGPT are transforming the way developers write code and what it means for the future of programming.',
		date: '2024-03-12',
		category: 'Technology',
		tags: ['AI', 'Programming', 'Future Tech', 'Developer Tools'],
		image: '/images/blog.jpg',
		slug: 'ai-in-software-development',
		author: 'Michael Rodriguez',
		readingTime: 6,
		views: 1000,
	},
	{
		title: 'Mastering TypeScript: Advanced Type System Features',
		shortContent: `Deep dive into TypeScript's advanced features including conditional types, mapped types, and the latest additions in TypeScript 5.4.`,
		date: '2024-03-08',
		category: 'Development',
		tags: ['TypeScript', 'JavaScript', 'Programming'],
		image: '/images/blog.jpg',
		slug: 'mastering-typescript-advanced-features',
		author: 'Emma Watson',
		readingTime: 12,
		views: 1000,
	},
	{
		title: 'Web Performance Optimization Techniques for 2024',
		shortContent:
			'Learn cutting-edge techniques for optimizing web performance, from Core Web Vitals to advanced caching strategies and modern image optimization.',
		date: '2024-03-01',
		category: 'Performance',
		tags: ['Web Performance', 'Optimization', 'Core Web Vitals'],
		image: '/images/blog.jpg',
		slug: 'web-performance-optimization-2024',
		author: 'David Park',
		readingTime: 10,
		views: 15234,
	},
	{
		title: 'Implementing Micro-Frontends: A Practical Guide',
		shortContent:
			'Step-by-step guide to implementing micro-frontends architecture in large applications, with real-world examples and best practices.',
		date: '2024-02-28',
		category: 'Architecture',
		tags: ['Micro-Frontends', 'Architecture', 'JavaScript'],
		image: '/images/blog.jpg',
		slug: 'implementing-micro-frontends',
		author: 'Lisa Johnson',
		readingTime: 15,
		views: 12876,
	},
	{
		title: 'State Management in 2024: Beyond Redux',
		shortContent:
			'Exploring modern state management solutions including Zustand, Jotai, and React Query, and when to use each approach.',
		date: '2024-02-25',
		category: 'Development',
		tags: ['React', 'State Management', 'JavaScript'],
		image: '/images/blog.jpg',
		slug: 'state-management-2024',
		author: 'Alex Thompson',
		readingTime: 9,
		views: 10543,
	},
	{
		title: 'Building Accessible Web Applications',
		shortContent:
			'Comprehensive guide to implementing accessibility in web applications, including ARIA attributes, keyboard navigation, and testing methodologies.',
		date: '2024-02-20',
		category: 'Accessibility',
		tags: ['A11y', 'Web Development', 'Inclusion'],
		image: '/images/blog.jpg',
		slug: 'building-accessible-web-applications',
		author: 'Maria Garcia',
		readingTime: 11,
		views: 9876,
	},
];

export const blogCategories = () => {
	return {
		statusCode: 200,
		message: 'Categories retrieved successfully',
		data: categories,
		meta: {
			total: categories.length,
			limit: 10,
			page: 1,
			total_pages: 1,
		},
	};
};

export const recentBlogs = () => {
	const dateWiseSort = blogs.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	const recent = dateWiseSort.slice(0, 3);
	return {
		statusCode: 200,
		message: 'Recent blogs retrieved successfully',
		data: recent,
		meta: {
			total: recent.length,
			limit: 3,
			page: 1,
			total_pages: 1,
		},
	};
};

export const topBlogs = () => {
	const viewWiseSort = blogs.sort((a, b) => b.views - a.views);
	const top = viewWiseSort.slice(0, 4);
	return {
		statusCode: 200,
		message: 'Top blogs retrieved successfully',
		data: top,
		meta: {
			total: top.length,
			limit: 4,
			page: 1,
			total_pages: 1,
		},
	};
};

export const blogDetails = (slug: string) => {
	const blog = blogs.find((blog) => blog.slug === slug);
	return {
		statusCode: 200,
		message: 'Blog details retrieved successfully',
		data: blog,
	};
};
