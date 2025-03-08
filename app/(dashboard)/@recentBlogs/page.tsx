import RecentBlogs from '@/components/blogs/RecentBlogs';
import { recentBlogs } from '@/lib/blogs';

const RecentBlogsPage = () => {
	return <RecentBlogs blogs={recentBlogs} />;
};

export default RecentBlogsPage;
