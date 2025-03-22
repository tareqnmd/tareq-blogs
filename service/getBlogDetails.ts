import { apiInstance, blogDetails } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getBlogDetails = async (slug: string) => {
	return blogDetails(slug);
	const blog = await apiInstance.get(
		AppServiceEnum.GET_BLOG_DETAILS.replace('{slug}', slug)
	);
	return blog;
};
