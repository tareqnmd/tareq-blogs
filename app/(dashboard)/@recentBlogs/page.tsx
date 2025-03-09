import { RecentBlogs } from '@/components/dashboard';
import { recentBlogs } from '@/lib/blogs';

const RecentBlogsPage = () => {
	return <RecentBlogs blogs={recentBlogs} />;
};

export default RecentBlogsPage;
