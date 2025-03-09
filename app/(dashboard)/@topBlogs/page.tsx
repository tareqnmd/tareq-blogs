import { TopBlogs } from '@/components/dashboard';
import { topBlogs } from '@/lib/blogs';

const TopBlogsPage = () => {
	return <TopBlogs blogs={topBlogs} />;
};

export default TopBlogsPage;
