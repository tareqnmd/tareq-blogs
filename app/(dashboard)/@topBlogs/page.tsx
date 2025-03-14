import { TopBlogs } from '@/components/blogs/top';
import { topBlogs } from '@/lib/blogs';

const TopBlogsPage = () => {
	return <TopBlogs blogs={topBlogs} />;
};

export default TopBlogsPage;
