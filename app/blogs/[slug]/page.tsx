import { DetailBlog } from '@/components/blogs';
import { blogDetails } from '@/lib/blogs';

const BlogPage = () => {
	return <DetailBlog blog={blogDetails} />;
};

export default BlogPage;
