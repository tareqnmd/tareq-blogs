import { apiInstance, blogsByCategory } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getBlogsByCategories = async (categorySlug: string) => {
	return blogsByCategory(categorySlug);
	const blogs = await apiInstance.get(
		AppServiceEnum.GET_BLOGS_BY_CATEGORIES.replace(
			'{categorySlug}',
			categorySlug
		)
	);
	return blogs;
};
