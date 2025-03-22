import { BlogDetails } from '@/components/blogs';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
	return <BlogDetails slug={params.slug} />;
};

export default BlogPage;
