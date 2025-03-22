import { DetailBlog } from '@/components/blogs';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
	return <DetailBlog slug={params.slug} />;
};

export default BlogPage;
