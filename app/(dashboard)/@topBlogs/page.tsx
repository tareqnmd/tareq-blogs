import { TopBlogs } from '@/components/blogs/top';
import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getTopBlogs } from '@/service';
import { QueryClient } from '@tanstack/react-query';

const TopBlogsPage = async () => {
	const queryClient = new QueryClient();
	const { data: blogs } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_TOP_BLOGS],
		queryFn: getTopBlogs,
	});
	return <TopBlogs blogs={blogs} />;
};

export default TopBlogsPage;
