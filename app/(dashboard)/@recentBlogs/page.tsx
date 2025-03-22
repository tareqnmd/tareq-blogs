import { RecentBlogs } from '@/components/blogs/recent';
import { recentBlogs } from '@/lib/fake-data/response';

const RecentBlogsPage = () => {
	return <RecentBlogs blogs={recentBlogs} />;
};

export default RecentBlogsPage;
