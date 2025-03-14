import { RecentBlogs } from '@/components/blogs/recent';
import { recentBlogs } from '@/lib/blogs';

const RecentBlogsPage = () => {
	return <RecentBlogs blogs={recentBlogs} />;
};

export default RecentBlogsPage;
