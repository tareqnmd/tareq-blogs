import { DetailBlog } from '@/components/blogs';
import { blogDetails } from '@/lib/fake-data/response';

const BlogPage = () => {
	return <DetailBlog blog={blogDetails} />;
};

export default BlogPage;
