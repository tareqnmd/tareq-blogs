import { RecentBlogs } from '@/components/blogs/recent';
import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getRecentBlogs } from '@/service';
import { QueryClient } from '@tanstack/react-query';

const RecentBlogsPage = async () => {
	const queryClient = new QueryClient();
	const { data: blogs } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_RECENT_BLOGS],
		queryFn: getRecentBlogs,
	});
	return <RecentBlogs blogs={blogs} />;
};

export default RecentBlogsPage;
