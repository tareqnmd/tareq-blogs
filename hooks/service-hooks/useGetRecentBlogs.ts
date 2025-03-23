import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getRecentBlogs } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetRecentBlogs = () => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_RECENT_BLOGS],
		queryFn: getRecentBlogs,
	});
	return query;
};
