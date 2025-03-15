import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getBlogDetails = async (slug: string) => {
	const blog = await apiInstance.get(
		AppServiceEnum.GET_BLOG_DETAILS.replace('{slug}', slug)
	);
	return blog;
};
