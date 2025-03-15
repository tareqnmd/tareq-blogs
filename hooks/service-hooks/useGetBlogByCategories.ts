import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getBlogsByCategories } from '@/service';
import { useQuery } from '@tanstack/react-query';

export const useGetBlogByCategories = (categorySlug: string) => {
	const query = useQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOGS_BY_CATEGORIES, categorySlug],
		queryFn: () => getBlogsByCategories(categorySlug),
	});
	return query;
};
