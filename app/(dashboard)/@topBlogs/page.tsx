import TopBlogs from '@/components/blogs/TopBlogs';
import { topBlogs } from '@/lib/blogs';

const TopBlogsPage = () => {
	return <TopBlogs blogs={topBlogs} />;
};

export default TopBlogsPage;
