import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getBlogDetails } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetBlogDetails = (slug: string) => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOG_DETAILS, slug],
		queryFn: () => getBlogDetails(slug),
	});
	return query;
};
