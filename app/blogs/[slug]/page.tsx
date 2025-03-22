import { BlogDetails } from '@/components/blogs';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	return <BlogDetails slug={slug} />;
};

export default BlogPage;
