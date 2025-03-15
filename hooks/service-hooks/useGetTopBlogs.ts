import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getTopBlogs } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetTopBlogs = () => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_TOP_BLOGS],
		queryFn: getTopBlogs,
	});
	return query;
};
