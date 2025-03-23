export enum AppServiceEnum {
	GET_BLOGS = '/blogs',
	GET_BLOG_DETAILS = '/blogs/{slug}',
	GET_BLOGS_BY_CATEGORIES = '/blogs/categories/{categorySlug}',
	GET_CATEGORIES = '/categories',
	GET_RECENT_BLOGS = '/blogs/recent',
	GET_TOP_BLOGS = '/blogs/top',
}

export enum ServiceQueryKeyEnum {
	GET_BLOGS = 'blogs',
	GET_BLOG_DETAILS = 'blogDetails',
	GET_BLOGS_BY_CATEGORIES = 'blogsByCategories',
	GET_CATEGORIES = 'categories',
	GET_RECENT_BLOGS = 'recentBlogs',
	GET_TOP_BLOGS = 'topBlogs',
}
