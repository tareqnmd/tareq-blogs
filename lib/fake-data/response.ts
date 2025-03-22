import blogs from './blogs';
import categories from './categories';

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
	if (!blog) {
		return {
			statusCode: 404,
			message: 'Blog not found',
		};
	}
	return {
		statusCode: 200,
		message: 'Blog details retrieved successfully',
		data: blog,
	};
};
