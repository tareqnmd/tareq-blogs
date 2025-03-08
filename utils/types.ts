export type Blog = {
	title: string;
	description: string;
	date: string;
	image: string;
	slug: string;
	tags: string[];
	category: string;
	readingTime: number;
	views: number;
};

export type Blogs = Blog[];
