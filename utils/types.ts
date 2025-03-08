export type Blog = {
	title: string;
	shortContent: string;
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
