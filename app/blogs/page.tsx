import { AllBlogs } from '@/components/blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs',
	description: 'Blogs',
};

const BlogsPage = () => {
	return <AllBlogs />;
};

export default BlogsPage;
