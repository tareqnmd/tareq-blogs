export type BlogCategory = {
	name: string;
	slug: string;
};

export type BlogCategories = BlogCategory[];

export type BlogHeaderInfo = {
	date: string;
	readingTime: number;
	views: number;
};

export type Blog = {
	title: string;
	shortContent: string;
	content: string;
	date: string;
	image: string;
	slug: string;
	tags: string[];
	category: string;
	readingTime: number;
	views: number;
};
export interface BlogDetails extends Omit<Blog, 'shortContent'> {
	content: string;
}

export type Blogs = Blog[];
