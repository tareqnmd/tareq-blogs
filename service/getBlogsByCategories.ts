import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getBlogsByCategories = async (categorySlug: string) => {
	const blogs = await apiInstance.get(
		AppServiceEnum.GET_BLOGS_BY_CATEGORIES.replace(
			'{categorySlug}',
			categorySlug
		)
	);
	return blogs;
};
