import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getAllBlogs } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetBlogs = () => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOGS],
		queryFn: getAllBlogs,
	});
	return query;
};
